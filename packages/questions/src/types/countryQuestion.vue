<template>
  <div class="question question-country">
    <mh-select
      v-model="question.value"
      input-type="country"
      :label="question.label"
      :error-message="errorMessage"
    />
  </div>
</template>
<script>
import MhSelect from "../../../select";

export default {
  components: {
    MhSelect,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    errors: {
      type: Object,
      default: () => {},
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
  setup() {},
};
</script>

