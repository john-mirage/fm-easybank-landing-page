/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const resolveOptions = {
  alias: {
    "@components": resolve(__dirname, "src/components"),
    "@fonts": resolve(__dirname, "src/fonts"),
    "@images": resolve(__dirname, "src/images"),
    "@styles": resolve(__dirname, "src/styles"),
    "@test": resolve(__dirname, "src/test"),
    "@utils": resolve(__dirname, "src/utils"),
  },
};

const testOptions = {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/test/setup.ts",
  // you might want to disable it, if you don't have tests that rely on CSS
  // since parsing CSS is slow
  //css: true,
};

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [
        react({
          babel: {
            plugins: [["babel-plugin-styled-components"]],
          },
        }),
      ],
      resolve: resolveOptions,
      test: testOptions,
    };
  } else {
    return {
      plugins: [
        react({
          babel: {
            plugins: [
              [
                "babel-plugin-styled-components",
                { fileName: false, displayName: false },
              ],
            ],
          },
        }),
      ],
      resolve: resolveOptions,
      test: testOptions,
    };
  }
});
