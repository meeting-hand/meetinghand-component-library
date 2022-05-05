<template>
  <div class="question question-textarea">
    <mh-text-area
      :rows="question.textareaRows"
      :title="question.label"
      :tooltip="question.information"
      :error-message="errorMessage"
      :placeholder="question.hint"
      v-model="value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import MhTextArea from "../../../textarea";

import { questionValidation } from "../composables/validations";

export default defineComponent({
  components: {
    MhTextArea,
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
