import Banner from "./src/index.vue";
Banner.install = function (Vue) {
  Vue.component(Banner.name, Banner);
  };
  export default Banner;
