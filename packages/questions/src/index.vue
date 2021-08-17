<template>
  <div class="questions">
    <component
      :is="`${question.type}Question`"
      :key="question.id"
      :errorMessage="errors[question.id]"
      v-for="(question, keyQuestion) in questions"
      v-model:question="questions[keyQuestion]"
    />
  </div>
</template>

<script>
import TextQuestion from "./types/textQuestion.vue";

export default {
  name: "Questions",
  components: {
    TextQuestion,
  },
  props: {
    questions: {
      type: Array,
      default: [],
    },
    errors: {
      type: Object,
      default: {},
    },
  },
  setup() {
    // your code
  },
};
</script>

<style scoped>
</style>
