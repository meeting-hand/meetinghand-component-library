const path = require("path");
const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "index.js"),
            name: "MhProgressBar",
            fileName: (format) => `lib.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [vue()],
});
