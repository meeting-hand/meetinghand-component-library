<template>
  <div class="question question-textarea">
    <mh-text-area
      :minRows="String(question.textareaRows)"
      :maxRows="String(question.textareaRows)"
      :title="question.label"
      :tooltip="question.information"
      :error-message="errorMessage"
      v-model="question.value"
    />
  </div>
</template>
<script>
import MhTextArea from "@meetinghand/paragraph";

export default {
  components: {
    MhTextArea,
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
