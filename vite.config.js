import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "download-button": resolve("download-button/index.html"),
        "loading-grid": resolve("loading-grid/index.html"),
        "login-interface": resolve("login-interface/index.html"),
        "navbar-icons": resolve("navbar-icons/index.html"),
        "neon-button": resolve("neon-button/index.html"),
        "send-button": resolve("send-button/index.html"),
      },
    },
  },
});
