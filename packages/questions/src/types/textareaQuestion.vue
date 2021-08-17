<template>
  <div class="question question-textarea">
    <mh-text-area
      v-model="question.value"
      :minRows="String(question.textareaRows)"
      :maxRows="String(question.textareaRows)"
      :title="question.label"
      :tooltip="question.information"
    />
  </div>
</template>
<script>
import MhTextArea from "@meetinghand/textarea";

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
  },
  setup(props) {
    console.log(props.question);
  },
};
</script>
