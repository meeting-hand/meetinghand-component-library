<template>
  <div class="question question-select">
    <mh-select
      :options="question.eventFormFieldOptions"
      :placeholder="question.information"
      :label="question.label"
      :searchable="question.selectMultiple"
      :error-message="errorMessage"
      v-model="question.value"
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
