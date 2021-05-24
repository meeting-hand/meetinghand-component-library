import Textarea from "./src/index.vue";
import "./src/assets/main.scss";

Textarea.install = function (Vue) {
  Vue.component(Textarea.name, Textarea);
  };
  export default Textarea;
