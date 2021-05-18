import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#000000",
          "link-color": "#2196F3",
          "success-color": "#4CAF50",
          "warning-color": "#FFC700",
          "error-color": "#F44336",
          "font-size-base": "14px",
          "heading-color": "#000000",
          "text-color": "#000000",
          "text-color-secondary": "rgba(0, 0, 0, 0.45)",
          "disabled-color": "rgba(0, 0, 0, 0.25)",
          "border-radius-base": "4px",
          "border-color-base": "#d9d9d9",
          "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)",
        },
        javascriptEnabled: true,
      },
    },
  },
});
