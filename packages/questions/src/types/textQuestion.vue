<template>
  <div class="question question-text">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      :tooltip="question.information"
      :textTransform="question.textTransform"
      v-model="question.value"
    />
  </div>
</template>
<script>
import MhInput from "@meetinghand/input";

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

