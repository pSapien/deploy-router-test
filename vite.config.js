import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

function resolveAliases(aliases) {
  return aliases.map((alias) => {
    return {
      find: alias,
      replacement: path.resolve(__dirname, `./src/${alias}`),
    };
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/deploy-router-test/",

  build: {
    outDir: "./docs",
  },
  resolve: {
    alias: resolveAliases(["components"]),
  },
  plugins: [react()],
});
