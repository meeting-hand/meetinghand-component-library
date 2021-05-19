import Banner from "./src/index.vue";
import "./src/assets/main.scss";

Banner.install = function (Vue) {
  Vue.component(Banner.name, Banner);
  };
  export default Banner;
