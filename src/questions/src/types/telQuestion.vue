<template>
  <div class="question question-tel">
    <mh-input
      :label="question.label"
      :error-message="errorMessage"
      :tooltip="question.information"
      :placeholder="question.hint"
      input-type="tel"
      v-model="value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import MhInput from "../../../input";

import { questionValidation } from "../composables/validations";

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
