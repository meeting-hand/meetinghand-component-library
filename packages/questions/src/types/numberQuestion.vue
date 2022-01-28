<template>
  <div class="question question-text">
    <mh-input-number
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
import MhInputNumber from "../../../input-number";

import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhInputNumber,
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

    if (typeof value.value === "string") {
      value.value = parseInt(value.value);
    }

    return {
      value,
      errorMessage,
    };
  },
};
</script>

