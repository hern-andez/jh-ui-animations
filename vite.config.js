import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "download-button": resolve("download-button/index.html"),
        "loading-grid": resolve("loading-grid/index.html"),
        "neon-button": resolve("neon-button/index.html"),
        "send-button": resolve("send-button/index.html"),
      },
    },
  },
});
