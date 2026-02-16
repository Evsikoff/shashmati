const STORAGE_KEY = "shashmaty_progress";

export function getProgress() {
  const val = localStorage.getItem(STORAGE_KEY);
  return val ? parseInt(val, 10) : 0;
}

export function setProgress(defeatedId) {
  const current = getProgress();
  if (defeatedId > current) {
    localStorage.setItem(STORAGE_KEY, String(defeatedId));
  }
}

export function isUnlocked(shahId, progress) {
  return shahId <= progress + 1;
}

export function isDefeated(shahId, progress) {
  return shahId <= progress;
}
