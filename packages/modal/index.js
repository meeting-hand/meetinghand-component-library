import Modal from "./src/index.vue";
import "./src/assets/main.scss";

Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal);
  };
  export default Modal;
