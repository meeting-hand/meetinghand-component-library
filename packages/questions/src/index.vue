<template>
  <div :class="['questions', { ['deep-' + deep]: deep > 1 }]">
    <component
      :is="`${question.type}Question`"
      :key="question.id"
      :errorMessage="errors[`${fieldPrefix}${question.id}`]"
      :errors="errors"
      :fieldPrefix="fieldPrefix"
      :deep="deep"
      v-for="(question, keyQuestion) in questions"
      v-model:question="questions[keyQuestion]"
    />
  </div>
</template>

<script>
import { provide } from "vue";

import TextQuestion from "./types/textQuestion.vue";
import TelQuestion from "./types/telQuestion.vue";
import TextareaQuestion from "./types/textareaQuestion.vue";
import EmailQuestion from "./types/emailQuestion.vue";
import CountryQuestion from "./types/countryQuestion.vue";
import InformationQuestion from "./types/informationQuestion.vue";
import FileQuestion from "./types/fileQuestion.vue";
import DatepickerQuestion from "./types/datepickerQuestion.vue";
import CheckboxQuestion from "./types/checkboxQuestion.vue";
import RadioQuestion from "./types/radioQuestion.vue";
import SelectQuestion from "./types/selectQuestion.vue";

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
      default: () => [],
    },
    errors: {
      type: Object,
      default: () => {},
    },
    deep: {
      type: Number,
      default: 1,
    },
    fieldPrefix: {
      type: String,
      default: "",
    },
    dateFormat: {
      type: String,
      default: "US",
      validator: (value) => ["EU", "US"].includes(value),
    },
  },
  setup(props) {
    provide("dateFormat", props.dateFormat);
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
