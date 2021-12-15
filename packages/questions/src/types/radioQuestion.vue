<template>
  <div class="question question-radio">
    <label>{{ question.label }}</label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-radio
          :text="option.label"
          :data="option.id"
          v-model="question.value"
          @update:modelValue="otherOption = false"
        />
        <mh-questions
          :errors="errors"
          :deep="deep + 1"
          :fieldPrefix="fieldPrefix"
          v-if="question.value == option.id"
          v-model:questions="option.eventFormFields"
        />
      </li>
      <li v-if="question.radioOtherOption">
        <mh-radio
          v-model="otherOption"
          text="Other"
          :data="true"
          @update:modelValue="question.value = null"
        />
        <mh-input
          v-model="question.value"
          v-if="otherOption"
          class="other-input"
        />
      </li>
    </ul>
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }} hey
    </span>
  </div>
</template>
<script>
import MhRadio from "../../../radio";
import MhInput from "../../../input";
import MhQuestions from "../index.vue";

import { ref, computed } from "vue";

export default {
  components: {
    MhRadio,
    MhQuestions,
    MhInput,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    errorMessage: {
      type: String,
      default: "",
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
      default: null,
    },
  },
  setup(props) {
    const otherOption = ref(typeof props.question.value === "string");
    return {
      otherOption,
    };
  },
};
</script>

