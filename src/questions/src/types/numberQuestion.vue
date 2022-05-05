<template>
  <div class="question question-text">
    <mh-input-number
      :label="question.label"
      :errorMessage="errorMessage"
      :tooltip="question.information"
      :textTransform="question.textTransform"
      :placeholder="question.hint"
      :step="question.numberStepCount"
      :min="question.numberMin"
      :max="question.numberMax"
      v-model="value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { questionValidation } from "../composables/validations";

import MhInputNumber from "../../../input-number";

export default defineComponent({
  components: {
    MhInputNumber,
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

    if (typeof value.value === "string") {
      value.value = parseInt(value.value);
    }

    return {
      value,
      errorMessage,
    };
  },
});
</script>

