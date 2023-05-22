/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react({ plugins: [["@swc/plugin-styled-components", {}]] })],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@fonts": resolve(__dirname, "src/fonts"),
      "@images": resolve(__dirname, "src/images"),
      "@styles": resolve(__dirname, "src/styles"),
      "@test": resolve(__dirname, "src/test"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    //css: true,
  },
});
