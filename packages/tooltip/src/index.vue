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

<script>
import { Tooltip } from "ant-design-vue";

//import "ant-design-vue/lib/tooltip/style/index.less";
import "./assets/main.scss";

export default {
  name: "Tooltip",
  components: {
    [Tooltip.name]: Tooltip,
  },
  props: {
    placement: {
      type: String,
      default: "top",
      validator: (_v) => ["top", "left", "right", "bottom"].includes(_v),
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
