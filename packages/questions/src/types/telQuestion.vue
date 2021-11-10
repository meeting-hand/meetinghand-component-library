<template>
  <div class="question question-tel">
    <mh-input
      :label="question.label"
      :error-message="errorMessage"
      v-model="question.value"
      :tooltip="question.information"
      input-type="tel"
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
  },
  setup() {},
};
</script>
