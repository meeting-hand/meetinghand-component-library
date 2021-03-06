<template>
  <div :class="['questions', { ['deep-' + deep]: deep > 1 }]">
    <component
      :is="`${question.type}Question`"
      :key="question.id"
      :fieldPrefix="fieldPrefix"
      :deep="deep"
      v-for="(question, keyQuestion) in questions"
      v-model:question="questions[keyQuestion]"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, provide, defineComponent } from "vue";

import TextQuestion from "./types/textQuestion.vue";
import NumberQuestion from "./types/numberQuestion.vue";
import TelQuestion from "./types/telQuestion.vue";
import TextareaQuestion from "./types/textareaQuestion.vue";
import EmailQuestion from "./types/emailQuestion.vue";
import CountryQuestion from "./types/countryQuestion.vue";
import InformationQuestion from "./types/informationQuestion.vue";
import FileQuestion from "./types/fileQuestion.vue";
import DatepickerQuestion from "./types/datepickerQuestion.vue";

export default defineComponent({
  name: "Questions",
  components: {
    NumberQuestion,
    TextQuestion,
    TelQuestion,
    TextareaQuestion,
    EmailQuestion,
    CountryQuestion,
    InformationQuestion,
    FileQuestion,
    CheckboxQuestion: defineAsyncComponent(
      (): any => import("./types/checkboxQuestion.vue")
    ),
    RadioQuestion: defineAsyncComponent(
      (): any => import("./types/radioQuestion.vue")
    ),
    SelectQuestion: defineAsyncComponent(
      (): any => import("./types/selectQuestion.vue")
    ),
    DatepickerQuestion,
  },
  props: {
    questions: {
      type: Array as () => any[],
      default: [],
    },
    deep: {
      type: Number,
      default: 1,
    },
    fieldPrefix: {
      type: String,
      default: "questions.id_",
    },
    dateFormat: {
      type: String,
      default: "US",
      validator: (value: string) => ["EU", "US"].includes(value),
    },
    maxFileSize: {
      type: Number,
      default: 5000000,
    },
  },
  setup(props: any) {
    provide("dateFormat", props.dateFormat);
    provide("maxFileSize", props.maxFileSize);
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
