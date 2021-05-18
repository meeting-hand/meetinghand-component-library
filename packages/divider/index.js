import Divider from "./src/index.vue";
import "./src/assets/main.scss";
Divider.install = function (Vue) {
  Vue.component(Divider.name, Divider);
};
export default Divider;
