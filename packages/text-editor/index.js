import TextEditor from "./src/index.vue";
import "./src/assets/main.scss";

TextEditor.install = function (Vue) {
  Vue.component(TextEditor.name, TextEditor);
  };
  export default TextEditor;
