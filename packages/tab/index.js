import Tab from "./src/index.vue";
import "./src/assets/main.scss";

Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab);
  };
  export default Tab;
