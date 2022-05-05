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
<script lang="ts">
import { defineComponent } from "vue";
import { questionValidation } from "../composables/validations";

import MhSelect from "../../../select";

import Tooltip from "../../../tooltip";
import MhIcon from "../../../style/icons";

export default defineComponent({
  components: {
    MhSelect,
    Tooltip,
    MhIcon,
  },
  props: {
    question: {
      type: Object as () => any,
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
});
</script>

