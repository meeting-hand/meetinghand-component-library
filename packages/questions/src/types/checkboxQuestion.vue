<template>
  <div class="question question-checkbox">
    <label>{{ question.label }}</label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-checkbox
          :label="option.label"
          :data="option.id"
          v-model="value"
          :error-message="errorMessage"
        />
        <mh-questions
          :deep="deep + 1"
          :fieldPrefix="fieldPrefix"
          :dateFormat="dateFormatLocation"
          v-if="Array.isArray(value) && value.includes(option.id)"
          v-model:questions="option.eventFormFields"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import MhCheckbox from "@meetinghand/checkbox";
import MhQuestions from "../index.vue";

import { inject } from "vue";
import { questionValidation } from "../composables/validations";

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
    const dateFormatLocation = inject("dateFormat");

    const { value, errorMessage } = questionValidation(
      props.question,
      props.fieldPrefix
    );

    return {
      value,
      errorMessage,
      dateFormatLocation,
    };
  },
};
</script>

