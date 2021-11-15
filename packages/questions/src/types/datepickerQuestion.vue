<template>
  <div class="question question-select">
    <mh-datepicker
      v-model="question.value"
      :placeholder="question.information"
      format="MM.DD.YYYY"
      :error-message="errorMessage"
      :label="question.label"
    />
  </div>
</template>
<script>
import MhDatepicker from "../../../date-picker";

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
