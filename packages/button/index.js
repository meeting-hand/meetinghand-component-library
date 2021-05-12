import MHButton from "./src/index.vue";

/* Ant UI Imports */
// import "ant-design-vue/dist/antd.css"; 
// import Button from "ant-design-vue/lib/button";
// MHButton.components = {
//   [Button.name]: Button,
// };


MHButton.install = (Vue) => {
  Vue.component(MHButton.name, MHButton);
};

export default MHButton;
