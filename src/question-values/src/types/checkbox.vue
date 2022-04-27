<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="value">
      <ul>
        <li v-for="value in questionValue" :key="value">
          <span>{{ value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

import { getQuestionLabelValue } from "../composables/fields/questions";

export default defineComponent({
  props: {
    question: {
      type: Object as () => any,
      required: true,
    },
  },
  setup(props) {
    const questionSetupData: any = inject("questionSetupData");

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
