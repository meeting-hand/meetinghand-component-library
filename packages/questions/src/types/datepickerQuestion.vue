<template>
  <div class="question question-select">
    <mh-datepicker
      v-model="value"
      :placeholder="question.hint"
      :format="dateFormat"
      :error-message="errorMessage"
      :label="question.label"
    >
      <template v-slot:tooltip>
        <tooltip
          v-if="question.information"
          size="large"
          placement="top"
          :text="question.information"
        >
          <mh-icon name="system-info" />
        </tooltip>
      </template>
    </mh-datepicker>
  </div>
</template>
<script>
import { inject } from "vue";
import { questionValidation } from "../composables/validations";

import MhDatepicker from "@meetinghand/date-picker/src/index.vue";
import Tooltip from "@meetinghand/tooltip";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default {
  components: {
    MhDatepicker,
    Tooltip,
    MhIcon,
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
