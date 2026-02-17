import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import Engine from "../utils/Engine";

export function useChessGame({ opponent, playerColor, onGameEnd }) {
  const gameRef = useRef(new Chess());
  const engineRef = useRef(null);
  const [position, setPosition] = useState(gameRef.current.fen());
  const [moveHistory, setMoveHistory] = useState([]);
  const [thinking, setThinking] = useState(false);
  const [highlightSquares, setHighlightSquares] = useState({});
  const mountedRef = useRef(true);

  const engineColor = playerColor === "w" ? "b" : "w";

  // Map opponent strength (1-20) to search depth (1-6)
  const depth = useMemo(() => {
    const s = opponent.strength;
    if (s <= 3) return 1;
    if (s <= 6) return 2;
    if (s <= 10) return 3;
    if (s <= 14) return 4;
    if (s <= 18) return 5;
    return 6;
  }, [opponent.strength]);

  const checkGameState = useCallback(
    (game) => {
      if (game.inCheck()) {
        const loser = game.turn();
        if (loser === engineColor) {
          onGameEnd("win");
        } else {
          onGameEnd("lose");
        }
        return true;
      }
      if (game.isStalemate()) {
        onGameEnd("draw");
        return true;
      }
      if (game.isDraw()) {
        onGameEnd("draw");
        return true;
      }
      return false;
    },
    [engineColor, onGameEnd]
  );

  const applyEngineMove = useCallback(
    (moveStr) => {
      const game = gameRef.current;
      if (!moveStr) return;

      const from = moveStr.substring(0, 2);
      const to = moveStr.substring(2, 4);
      const promotion = moveStr.length > 4 ? moveStr[4] : undefined;

      const move = game.move({ from, to, promotion });
      if (!move) return;

      setPosition(game.fen());
      setMoveHistory([...game.history()]);
      setHighlightSquares({
        [move.from]: { backgroundColor: "rgba(152, 86, 26, 0.3)" },
        [move.to]: { backgroundColor: "rgba(152, 86, 26, 0.5)" },
      });
      checkGameState(game);
    },
    [checkGameState]
  );

  const makeEngineMove = useCallback(async () => {
    const engine = engineRef.current;
    const game = gameRef.current;
    if (!engine || !mountedRef.current) return;
    if (game.isGameOver() || game.inCheck()) return;

    setThinking(true);
    try {
      const bestMove = await engine.findBestMove(game.fen(), depth);
      if (!mountedRef.current) return;

      if (bestMove && bestMove !== "(none)") {
        applyEngineMove(bestMove);
      }
    } catch (err) {
      console.error("Engine error:", err);
    } finally {
      if (mountedRef.current) setThinking(false);
    }
  }, [depth, applyEngineMove]);

  useEffect(() => {
    mountedRef.current = true;
    const eng = new Engine();
    engineRef.current = eng;

    if (engineColor === "w") {
      makeEngineMove();
    }

    return () => {
      mountedRef.current = false;
      eng.destroy();
    };
  }, [opponent, engineColor, makeEngineMove]);

  const onDrop = useCallback(
    ({ piece, sourceSquare, targetSquare }) => {
      const game = gameRef.current;
      if (thinking) return false;
      if (!targetSquare) return false;
      if (game.turn() !== playerColor) return false;

      const pieceType = piece?.pieceType || "";
      const promotion = pieceType[1]?.toLowerCase() === "p" ? "q" : undefined;
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion,
      });

      if (!move) return false;

      setPosition(game.fen());
      setMoveHistory([...game.history()]);
      setHighlightSquares({
        [sourceSquare]: { backgroundColor: "rgba(34, 80, 129, 0.3)" },
        [targetSquare]: { backgroundColor: "rgba(34, 80, 129, 0.5)" },
      });

      if (!checkGameState(game)) {
        makeEngineMove();
      }

      return true;
    },
    [thinking, playerColor, checkGameState, makeEngineMove]
  );

  const undoMove = useCallback(() => {
    const game = gameRef.current;
    game.undo();
    game.undo();
    setPosition(game.fen());
    setMoveHistory([...game.history()]);
    setHighlightSquares({});
  }, []);

  const restartGame = useCallback(() => {
    const game = gameRef.current;
    game.reset();
    setPosition(game.fen());
    setMoveHistory([]);
    setHighlightSquares({});
    if (engineColor === "w") {
      makeEngineMove();
    }
  }, [engineColor, makeEngineMove]);

  const formatHistory = () => {
    const pairs = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      pairs.push({
        num: Math.floor(i / 2) + 1,
        white: moveHistory[i],
        black: moveHistory[i + 1] || "",
      });
    }
    return pairs;
  };

  return {
    boardElement: (
      <div className="board-container">
        <Chessboard
          options={{
            id: "shashmaty-board",
            position,
            onPieceDrop: onDrop,
            boardOrientation: playerColor === "w" ? "white" : "black",
            boardStyle: {
              borderRadius: "4px",
              boxShadow: "0 4px 20px rgba(45, 36, 20, 0.4)",
            },
            darkSquareStyle: { backgroundColor: "#225081" },
            lightSquareStyle: { backgroundColor: "#3ca4a0" },
            squareStyles: highlightSquares,
            animationDurationInMs: 250,
          }}
        />
        {thinking && (
          <div className="thinking-indicator">Соперник думает...</div>
        )}
      </div>
    ),
    moveHistory: formatHistory(),
    undoMove,
    restartGame,
  };
}
