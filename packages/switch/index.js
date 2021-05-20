import Switch from "./src/index.vue";
import "./src/assets/main.scss";

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch);
  };
  export default Switch;
