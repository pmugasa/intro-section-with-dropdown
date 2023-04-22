import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://pmugasa.github.io/intro-section-with-dropdown",
  plugins: [react()],
});
