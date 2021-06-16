<template>
  <a-button
    type="primary"
    :class="[
      `size-${size}`,
      `alignment-${iconAlignment}`,
      { wait: wait },
      { disabled: disabled },
      color,
    ]"
    :disabled="disabled || wait"
    :htmlType="submit ? 'submit' : 'button'"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
    <mh-icon name="wait" class="wait-spinner" v-if="wait" />
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonPrimary",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    size: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "large"].includes(_v),
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
    submit: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
      validator: (_v) => ["blue", "green", "red"].includes(_v),
    },
  },
};
</script>
