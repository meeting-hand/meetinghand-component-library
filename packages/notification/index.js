import Notification from "./src/index.vue";
import "./src/assets/main.scss";

Notification.install = function (Vue) {
  Vue.component(Notification.name, Notification);
  };
  export default Notification;
