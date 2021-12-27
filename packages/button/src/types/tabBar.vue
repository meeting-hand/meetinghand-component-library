<template>
  <a :class="[{ active: isActive }, `tab-bar-btn`]">
    <span>
      <slot></slot>
    </span>
  </a>
</template>
<script>
import { Button } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonTabBar",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
