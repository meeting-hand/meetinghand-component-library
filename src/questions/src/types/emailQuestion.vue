<template>
  <div class="question question-email">
    <mh-input
      :label="question.label"
      :errorMessage="errorMessage"
      :tooltip="question.information"
      :placeholder="question.hint"
      email
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
