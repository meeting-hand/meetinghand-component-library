<template>
  <a-tooltip
    color="transparent"
    :overlayClassName="`mh-tooltip`"
    :placement="placement"
  >
    <template #title>{{ text }}</template>
    <slot></slot>
  </a-tooltip>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Tooltip from "ant-design-vue/es/tooltip";

export default defineComponent({
  name: "Tooltip",
  components: {
    [Tooltip.name]: Tooltip,
  },
  props: {
    placement: {
      type: String,
      default: "top",
      validator: (_v: string) =>
        ["top", "left", "right", "bottom"].includes(_v),
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
