import Radio from "./src/index.vue";
import "./src/assets/main.scss";

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio);
  };
  export default Radio;
