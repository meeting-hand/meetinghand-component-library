<template>
  <div class="question-text">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      v-model="question.value"
      :tooltip="question.information"
      input-type="tel"
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
  },
  setup() {},
};
</script>
