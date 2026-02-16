import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const appDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(appDir, "..");

export default defineConfig({
  root: repoRoot,
  publicDir: path.resolve(appDir, "public"),
  plugins: [react()],
  build: {
    outDir: path.resolve(appDir, "dist"),
    emptyOutDir: true,
  },
});
