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
  setup(props) {
    const dateFormatLocation = inject("dateFormat");

    if (
      props.question.value &&
      new Date(props.question.value) instanceof Date
    ) {
      let value = "";
      const day = new Date(props.question.value)
        .getDate()
        .toString()
        .padStart(2, "0");
      const month = (new Date(props.question.value).getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const year = new Date(props.question.value).getFullYear();
      if (dateFormatLocation === "US") {
        value = `${month}.${day}.${year}`;
      } else {
        value = `${day}.${month}.${year}`;
      }
      props.question.value = value;
    }

    const dateFormat =
      dateFormatLocation === "US" ? "MM.DD.YYYY" : "DD.MM.YYYY";

    return {
      dateFormat,
    };
  },
};
</script>
