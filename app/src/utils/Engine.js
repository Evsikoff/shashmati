import { Chess } from "chess.js";

// Piece-square tables (from white's perspective, flipped for black)
// Values encourage pieces to occupy strong squares
const PST = {
  p: [
     0,  0,  0,  0,  0,  0,  0,  0,
    50, 50, 50, 50, 50, 50, 50, 50,
    10, 10, 20, 30, 30, 20, 10, 10,
     5,  5, 10, 25, 25, 10,  5,  5,
     0,  0,  0, 20, 20,  0,  0,  0,
     5, -5,-10,  0,  0,-10, -5,  5,
     5, 10, 10,-20,-20, 10, 10,  5,
     0,  0,  0,  0,  0,  0,  0,  0,
  ],
  n: [
    -50,-40,-30,-30,-30,-30,-40,-50,
    -40,-20,  0,  0,  0,  0,-20,-40,
    -30,  0, 10, 15, 15, 10,  0,-30,
    -30,  5, 15, 20, 20, 15,  5,-30,
    -30,  0, 15, 20, 20, 15,  0,-30,
    -30,  5, 10, 15, 15, 10,  5,-30,
    -40,-20,  0,  5,  5,  0,-20,-40,
    -50,-40,-30,-30,-30,-30,-40,-50,
  ],
  b: [
    -20,-10,-10,-10,-10,-10,-10,-20,
    -10,  0,  0,  0,  0,  0,  0,-10,
    -10,  0, 10, 10, 10, 10,  0,-10,
    -10,  5,  5, 10, 10,  5,  5,-10,
    -10,  0, 10, 10, 10, 10,  0,-10,
    -10, 10, 10, 10, 10, 10, 10,-10,
    -10,  5,  0,  0,  0,  0,  5,-10,
    -20,-10,-10,-10,-10,-10,-10,-20,
  ],
  r: [
     0,  0,  0,  0,  0,  0,  0,  0,
     5, 10, 10, 10, 10, 10, 10,  5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
     0,  0,  0,  5,  5,  0,  0,  0,
  ],
  q: [
    -20,-10,-10, -5, -5,-10,-10,-20,
    -10,  0,  0,  0,  0,  0,  0,-10,
    -10,  0,  5,  5,  5,  5,  0,-10,
     -5,  0,  5,  5,  5,  5,  0, -5,
      0,  0,  5,  5,  5,  5,  0, -5,
    -10,  5,  5,  5,  5,  5,  0,-10,
    -10,  0,  5,  0,  0,  0,  0,-10,
    -20,-10,-10, -5, -5,-10,-10,-20,
  ],
  k: [
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -20,-30,-30,-40,-40,-30,-30,-20,
    -10,-20,-20,-20,-20,-20,-20,-10,
     20, 20,  0,  0,  0,  0, 20, 20,
     20, 30, 10,  0,  0, 10, 30, 20,
  ],
};

const PIECE_VALUES = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };

const INF = 999999;
const CHECK_WIN = 100000;

// Square name "a1" -> index 0..63 (a8=0, h1=63)
function sqIndex(sq) {
  const file = sq.charCodeAt(0) - 97; // a=0
  const rank = sq.charCodeAt(1) - 49; // 1=0
  return (7 - rank) * 8 + file;
}

// Evaluate a position for the "First Check" variant.
// Positive = good for side to move.
function evaluate(game) {
  // Terminal: side to move is in check → they LOST
  if (game.inCheck()) return -CHECK_WIN;

  // Stalemate / draw
  if (game.isStalemate() || game.isDraw()) return 0;

  const turn = game.turn();
  const board = game.board();
  let score = 0;

  // Material + PST
  for (let r = 0; r < 8; r++) {
    for (let f = 0; f < 8; f++) {
      const piece = board[r][f];
      if (!piece) continue;
      const idx = piece.color === "w" ? r * 8 + f : (7 - r) * 8 + f;
      const val = PIECE_VALUES[piece.type] + (PST[piece.type]?.[idx] || 0);
      score += piece.color === turn ? val : -val;
    }
  }

  // Check threats: count moves that give check (huge bonus in First Check)
  const moves = game.moves({ verbose: true });
  let checkThreats = 0;
  for (const m of moves) {
    game.move(m);
    if (game.inCheck()) checkThreats++;
    game.undo();
  }
  score += checkThreats * 150;

  // Opponent check threats (penalty)
  // Flip turn by making a null-ish evaluation: count opponent's checking moves
  // We approximate by looking at opponent move count after a hypothetical pass
  // Since chess.js doesn't support null moves, we estimate from current position
  // by checking if any opponent piece attacks our king's neighbors
  // (this is a lighter heuristic to avoid full move generation twice)

  return score;
}

// Alpha-beta with move ordering
function alphaBeta(game, depth, alpha, beta, maximizing) {
  if (game.inCheck()) {
    // Side to move is in check = they lost in First Check
    return maximizing ? -CHECK_WIN + (100 - depth) : CHECK_WIN - (100 - depth);
  }

  if (depth === 0) return evaluate(game);

  const moves = game.moves({ verbose: true });

  if (moves.length === 0) {
    if (game.isStalemate() || game.isDraw()) return 0;
    return maximizing ? -CHECK_WIN : CHECK_WIN;
  }

  // Move ordering: checks first, then captures, then rest
  moves.sort((a, b) => {
    let sa = 0, sb = 0;
    // Prioritize moves that give check
    game.move(a);
    if (game.inCheck()) sa += 10000;
    game.undo();
    game.move(b);
    if (game.inCheck()) sb += 10000;
    game.undo();
    // Captures
    if (a.captured) sa += 1000 + PIECE_VALUES[a.captured];
    if (b.captured) sb += 1000 + PIECE_VALUES[b.captured];
    return sb - sa;
  });

  if (maximizing) {
    let value = -INF;
    for (const move of moves) {
      game.move(move);
      value = Math.max(value, alphaBeta(game, depth - 1, alpha, beta, false));
      game.undo();
      alpha = Math.max(alpha, value);
      if (alpha >= beta) break;
    }
    return value;
  } else {
    let value = INF;
    for (const move of moves) {
      game.move(move);
      value = Math.min(value, alphaBeta(game, depth - 1, alpha, beta, true));
      game.undo();
      beta = Math.min(beta, value);
      if (alpha >= beta) break;
    }
    return value;
  }
}

// Find the best move using iterative deepening
function findBestMoveSync(fen, maxDepth) {
  const game = new Chess(fen);

  if (game.inCheck()) return null;

  const moves = game.moves({ verbose: true });
  if (moves.length === 0) return null;

  // Check for instant wins first (1-ply)
  for (const m of moves) {
    game.move(m);
    if (game.inCheck()) {
      game.undo();
      return m.from + m.to + (m.promotion || "");
    }
    game.undo();
  }

  let bestMove = moves[0];
  let bestScore = -INF;

  // Iterative deepening
  for (let depth = 1; depth <= maxDepth; depth++) {
    let currentBest = moves[0];
    let currentBestScore = -INF;

    for (const move of moves) {
      game.move(move);
      const score = -alphaBeta(game, depth - 1, -INF, -currentBestScore, false);
      game.undo();

      if (score > currentBestScore) {
        currentBestScore = score;
        currentBest = move;
      }
    }

    bestMove = currentBest;
    bestScore = currentBestScore;

    // If we found a forced check, no need to search deeper
    if (bestScore >= CHECK_WIN - 200) break;
  }

  return bestMove.from + bestMove.to + (bestMove.promotion || "");
}

// Engine class — same public API as before, but synchronous JS engine
export default class Engine {
  constructor() {
    this.depth = 4;
  }

  // depth is set externally based on opponent strength
  setDepth(d) {
    this.depth = d;
  }

  destroy() {
    // nothing to clean up
  }

  findBestMove(fen, depth) {
    const d = depth ?? this.depth;
    return new Promise((resolve) => {
      // Use setTimeout to avoid blocking the UI thread
      setTimeout(() => {
        const move = findBestMoveSync(fen, d);
        resolve(move);
      }, 0);
    });
  }
}
