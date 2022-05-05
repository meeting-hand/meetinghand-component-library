<template>
  <div class="question question-text">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      :tooltip="question.information"
      :textTransform="question.textTransform"
      :placeholder="question.hint"
      v-model="value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { questionValidation } from "../composables/validations";

import MhInput from "../../../input";

export default defineComponent({
  components: {
    MhInput,
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

