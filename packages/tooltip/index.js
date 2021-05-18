import Tooltip from "./src/index.vue";
import "./src/assets/main.scss";
Tooltip.install = function (Vue) {
  Vue.component(Tooltip.name, Tooltip);
  };
  export default Tooltip;
