<template>
  <div class="question question-select">
    <mh-datepicker
      v-model="question.value"
      :placeholder="question.information"
      :format="dateFormat"
      :error-message="errorMessage"
      :label="question.label"
    />
  </div>
</template>
<script>
import MhDatepicker from "../../../date-picker";

import { inject } from "vue";

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
  setup() {
    const dateFormatLocation = inject("dateFormat");

    const dateFormat =
      dateFormatLocation === "US" ? "MM.DD.YYYY" : "DD.MM.YYYY";

    return {
      dateFormat,
    };
  },
};
</script>
