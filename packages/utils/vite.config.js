const path = require("path");
const { defineConfig } = require("vite");

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "index.js"),
            name: "MhUtils",
            fileName: (format) => `lib.${format}.js`,
        },
    },
    plugins: [],
});
