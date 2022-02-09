<template>
  <div class="text question"></div>
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
