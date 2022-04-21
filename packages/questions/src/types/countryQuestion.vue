<template>
  <div class="question question-country">
    <mh-select
      input-type="country"
      :label="question.label"
      :error-message="errorMessage"
      :placeholder="question.hint"
      v-model="value"
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
    </mh-select>
  </div>
</template>
<script>
import { questionValidation } from "../composables/validations";

import MhSelect from "@meetinghand/select/src/index.vue";

import Tooltip from "@meetinghand/tooltip";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default {
  components: {
    MhSelect,
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
    const { value, errorMessage } = questionValidation(
      props.question,
      props.fieldPrefix
    );
    return {
      value,
      errorMessage,
    };
  },
};
</script>

