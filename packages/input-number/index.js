import InputNumber from "./src/index.vue";
import "./src/assets/scss/main.scss";
InputNumber.install = function (Vue) {
  Vue.component(InputNumber.name, InputNumber);
};
export default InputNumber;
