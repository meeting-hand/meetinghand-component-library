<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="no-answer">
      <span>{{ $t("message.noAnswer") }}</span>
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
