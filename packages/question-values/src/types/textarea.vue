<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="value">
      <span>{{ question.value }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
