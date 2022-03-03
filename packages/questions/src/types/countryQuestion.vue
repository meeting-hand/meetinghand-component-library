<template>
  <div class="question question-country">
    <mh-select
      v-model="value"
      input-type="country"
      :label="question.label"
      :error-message="errorMessage"
    />
  </div>
</template>
<script>
import MhSelect from "@meetinghand/select";

import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhSelect,
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

