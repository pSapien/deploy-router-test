import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/deploy-router-test/",
  build: {
    outDir: "./docs",
  },
  plugins: [react()],
});
