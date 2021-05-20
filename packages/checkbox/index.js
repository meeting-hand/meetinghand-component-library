import Checkbox from "./src/index.vue";
import "./src/assets/main.scss";
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
};
export default Checkbox;
