<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="value">
      <span v-for="label of questionValue" :key="label">{{ label }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent, inject } from "vue";

import { getQuestionLabelValue } from "../composables/fields/questions";

export default defineComponent({
  props: {
    question: {
      type: Object,
      default: "",
    },
  },
  setup(props) {
    const questionSetupData = inject("questionSetupData");

    const questionValue = getQuestionLabelValue(
      questionSetupData,
      props.question
    );

    return {
      questionValue,
    };
  },
});
</script>
