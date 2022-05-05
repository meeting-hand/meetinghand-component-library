<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="value">
      <a :href="question.value" target="_blank">
        <!-- {{ $t("button.download") }} -->
        Download
      </a>
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
