<template>
  <div class="question question-email">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      :tooltip="question.information"
      :placeholder="question.hint"
      email
      v-model="value"
    />
  </div>
</template>
<script>
import MhInput from "@meetinghand/input/src/index.vue";

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
