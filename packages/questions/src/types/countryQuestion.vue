<template>
  <div class="question-text">
    <mh-select
      v-model="question.value"
      input-type="country"
      :label="question.label"
    />
  </div>
</template>
<script>
import MhSelect from "@meetinghand/select";

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
  },
  setup() {},
};
</script>

