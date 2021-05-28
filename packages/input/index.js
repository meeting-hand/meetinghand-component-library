import Input from "./src/index.vue";
import "./src/assets/scss/main.scss";

Input.install = function (Vue) {
  Vue.component(Input.name, Input);
};

export default Input;
