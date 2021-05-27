import Select from "./src/index.vue";
import "./src/assets/main.scss";

Select.install = function (Vue) {
	Vue.component(Select.name, Select);
};
export default Select;
