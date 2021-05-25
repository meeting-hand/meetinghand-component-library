import DatePicker from "./src/index.vue";
import "./src/assets/main.scss";
DatePicker.install = function (Vue) {
	Vue.component(DatePicker.name, DatePicker);
};
export default DatePicker;
