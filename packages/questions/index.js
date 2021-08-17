import Questions from "./src/index.vue";
Questions.install = function (Vue) {
  Vue.component(Questions.name, Questions);
  };
  export default Questions;
