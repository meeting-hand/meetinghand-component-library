<template>
  <a-button
    type="default"
    :class="[
      `size-${size}`,
      `alignment-${iconAlignment}`,
      { wait: wait },
      { disabled: disabled },
      'text-btn small-btn',
    ]"
    :disabled="disabled || wait"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
    <mh-icon name="wait" class="wait-spinner" v-if="wait" />
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
import MHIcon from "@meetinghand/style/icons/index";
export default {
  name: "MhButtonSmall",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    size: {
      type: String,
      default: "default",
      validator: (_v) => ["default"].includes(_v),
    },
    icon: {
      type: String,
      default: null,
    },
    iconAlignment: {
      type: String,
      default: "left",
      validator: (_v) => ["left", "right"].includes(_v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    wait: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
