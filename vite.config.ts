import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import vitePluginImport from "vite-plugin-babel-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  vitePluginImport([
    {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      ignoreStyles: []
    },
  ]),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
})
