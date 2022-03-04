<template>
  <div class="question question-select">
    <mh-datepicker
      v-model="value"
      :placeholder="question.information"
      :format="dateFormat"
      :error-message="errorMessage"
      :label="question.label"
    />
  </div>
</template>
<script>
import MhDatepicker from "@meetinghand/date-picker/src/index.vue";

import { inject } from "vue";
import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhDatepicker,
  },
  props: {
    question: {
      type: Object,
      required: true,
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

    const { value, errorMessage } = questionValidation(
      props.question,
      props.fieldPrefix
    );

    if (value.value && new Date(value.value) instanceof Date) {
      const currentDate = new Date(`${value.value} 00:00:00`);
      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const year = currentDate.getFullYear();
      if (dateFormatLocation === "US") {
        value.value = `${month}.${day}.${year}`;
      } else {
        value.value = `${day}.${month}.${year}`;
      }
    }

    const dateFormat =
      dateFormatLocation === "US" ? "MM.DD.YYYY" : "DD.MM.YYYY";

    return {
      dateFormat,
      value,
      errorMessage,
    };
  },
};
</script>
