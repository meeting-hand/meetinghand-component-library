<template>
  <component :is="name" class="mh-icon"></component>
</template>
<script>
import ArrowDown from "./arrowDown";
import ArrowUp from "./arrowUp";

const iconList = ["arrow-down", "arrow-up"];

export default {
  components: {
    ArrowDown,
    ArrowUp,
  },
  props: {
    name: {
      type: String,
      required: true,
      validator: (_i) => iconList.includes(_i),
    },
  },
};
</script>
<style scoped>
svg {
  width: 12px;
  height: 14px;
}
</style>