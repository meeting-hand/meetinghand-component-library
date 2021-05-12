import vue from '@vitejs/plugin-vue'

/**
 * Build configuration for client code, executed in the browser
 */
export default {
  plugins: [vue()],

  build: {
    lib: {
      entry: "index.js",
    },
    external: ["vue", "vuex", "vue-router", "ant-design-vue"],
    minify: "eslint",
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ["vue", "ant-design-vue"],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: "Vue",
      },
    },
  },
  // resolve: {
  //   dedupe: ["vue"],
  // },
};
