import Emoji from "./src/index.vue";
Emoji.install = function (Vue) {
  Vue.component(Emoji.name, Emoji);
  };
  export default Emoji;
