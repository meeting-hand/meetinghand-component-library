import Paragraph from "./src/index.vue";
import "./src/assets/main.scss";

Paragraph.install = function (Vue) {
  Vue.component(Paragraph.name, Paragraph);
  };
  export default Paragraph;
