import ColorPicker from "./src/index.vue";
import "./src/assets/main.scss";
ColorPicker.install = function (Vue) {
  Vue.component(ColorPicker.name, ColorPicker);
};
export default ColorPicker;
