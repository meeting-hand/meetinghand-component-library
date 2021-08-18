<template>
  <div class="question question-radio">
    <label>{{ question.label }}</label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-radio
          v-model="question.value"
          :text="option.label"
          :data="option.id"
          :error-message="errorMessage"
        />
        <mh-questions
          :errors="errors"
          :deep="deep + 1"
          v-if="question.value == option.id"
          v-model:questions="option.eventFormFields"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import MhRadio from "@meetinghand/radio";
import MhQuestions from "../index.vue";

export default {
  components: {
    MhRadio,
    MhQuestions,
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
  },
  setup() {},
};
</script>

