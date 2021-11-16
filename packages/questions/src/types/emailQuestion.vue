<template>
  <div class="question question-email">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      v-model="question.value"
      :tooltip="question.information"
      email
    />
  </div>
</template>
<script>
import MhInput from "../../../input";

export default {
  components: {
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
  setup() {},
};
</script>
