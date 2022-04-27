<template>
  <div class="number question">
    <label>{{ question.label }}</label>
    <div class="value">
      <span>{{ question.value }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object as () => any,
      required: true,
    },
  },
  setup() {},
});
</script>
