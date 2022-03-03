<template>
  <div class="question question-textarea">
    <mh-text-area
      :minRows="String(question.textareaRows)"
      :maxRows="String(question.textareaRows)"
      :title="question.label"
      :tooltip="question.information"
      :error-message="errorMessage"
      :placeholder="question.hint"
      v-model="value"
    />
  </div>
</template>
<script>
import MhTextArea from "@meetinghand/textarea";

import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhTextArea,
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
    const { value, errorMessage } = questionValidation(
      props.question,
      props.fieldPrefix
    );

    return {
      value,
      errorMessage,
    };
  },
};
</script>
