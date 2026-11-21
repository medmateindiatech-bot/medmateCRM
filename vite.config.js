import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(root, "src") } },
  build: {
    // Same CSS minifier and browser targets as the original live build (keeps vendor prefixes for older browsers).
    cssMinify: "esbuild",
    cssTarget: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
  },
});
