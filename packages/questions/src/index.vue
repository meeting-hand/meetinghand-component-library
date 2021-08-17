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
import TelQuestion from "./types/telQuestion.vue";
import TextareaQuestion from "./types/textareaQuestion.vue";
import EmailQuestion from "./types/emailQuestion.vue";
import CountryQuestion from "./types/countryQuestion.vue";
import InformationQuestion from "./types/informationQuestion.vue";
import FileQuestion from "./types/fileQuestion.vue";
import CheckboxQuestion from "./types/checkboxQuestion.vue";
import RadioQuestion from "./types/radioQuestions.vue";
import SelectQuestion from "./types/selectQuestion.vue";
import DatepickerQuestion from "./types/datepickerQuestion.vue";

export default {
  name: "Questions",
  components: {
    TextQuestion,
    TelQuestion,
    TextareaQuestion,
    EmailQuestion,
    CountryQuestion,
    InformationQuestion,
    FileQuestion,
    CheckboxQuestion,
    RadioQuestion,
    SelectQuestion,
    DatepickerQuestion,
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

<style lang="scss">
@import "./assets/main.scss";
</style>
