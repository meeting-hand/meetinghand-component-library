<template>
  <div class="question question-select">
    <mh-datepicker
      v-model="question.value"
      :placeholder="question.information"
      format="MM.DD.YYYY"
      :error-message="errorMessage"
    />
  </div>
</template>
<script>
import MhDatepicker from "@meetinghand/date-picker";

export default {
  components: {
    MhDatepicker,
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
