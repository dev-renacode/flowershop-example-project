import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { ESLint } from "eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
