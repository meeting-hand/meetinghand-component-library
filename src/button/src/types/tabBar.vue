<template>
  <a :class="[{ active: isActive }, `mh-tab-bar-button`]">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MHIcon from "../../../style/icons";

export default defineComponent({
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
});
</script>
