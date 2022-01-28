<template>
  <div class="question question-text">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      :tooltip="question.information"
      :textTransform="question.textTransform"
      :placeholder="question.hint"
      v-model="value"
    />
  </div>
</template>
<script>
import MhInput from "../../../input";

import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhInput,
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

