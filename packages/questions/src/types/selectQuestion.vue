<template>
  <div class="question question-select">
    <mh-select
      v-model="question.value"
      :options="question.eventFormFieldOptions"
      :placeholder="question.information"
      :label="question.label"
    />
  </div>
</template>
<script>
import MhSelect from "@meetinghand/select";

export default {
  components: {
    MhSelect,
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
