<template>
  <div class="question question-checkbox">
    <label>{{ question.label }}</label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-checkbox
          :label="option.label"
          :data="option.id"
          v-model="question.value"
          :error-message="errorMessage"
        />
        <mh-questions
          :errors="errors"
          :deep="deep + 1"
          v-if="
            Array.isArray(question.value) && question.value.includes(option.id)
          "
          v-model:questions="option.eventFormFields"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import MhCheckbox from "@meetinghand/checkbox";
import MhQuestions from "../index.vue";

export default {
  components: {
    MhCheckbox,
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

