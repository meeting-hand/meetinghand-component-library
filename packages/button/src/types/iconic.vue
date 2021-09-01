<template>
  <a-button
    :class="[
      `size-${size}`,
      { disabled: disabled },
      { 'circular-btn': circular },
      'iconic-btn',
      color,
    ]"
    :disabled="disabled || wait"
    :htmlType="submit ? 'submit' : 'button'"
  >
    <mh-icon name="wait" class="wait-spinner" v-if="wait" />
    <mh-icon :name="icon" v-else-if="icon" />
  </a-button>
</template>
<script>
import { Button } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonRow",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    size: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "circular", "small", "tiny"].includes(_v),
    },
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
      validator: (_v) => ["blue", "green", "red"].includes(_v),
    },
    wait: {
      type: Boolean,
      default: false,
    },
    circular: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
