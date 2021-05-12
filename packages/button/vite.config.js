import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style(name) {
        return `ant-design-vue/lib/${name}/style/index.css`;
      },
    },
  ],
});
