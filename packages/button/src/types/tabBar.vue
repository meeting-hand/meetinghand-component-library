<template>
  <a :class="[{ active: isActive }, `mh-tab-bar-button`]">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
import MHIcon from "@meetinghand/style/icons/index.vue";

export default {
  name: "MhButtonTabBar",
  components: {
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
