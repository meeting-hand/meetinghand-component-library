<template>
  <a-button
    type="primary"
    :class="[
      `size-${size}`,
      `alignment-${iconAlignment}`,
      { wait: wait },
      { disabled: disabled },
    ]"
    :disabled="disabled || wait"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
    <svg
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-if="wait"
      class="wait__spinner"
    >
      <path
        d="M5.94118 1C9.83966 1 13 4.13401 13 8C13 11.866 9.83966 15 5.94118 15C4.01733 15 2.27324 14.2368 1 12.999"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
import MHIcon from "@meetinghand/style/icons/index";
export default {
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
  },
  mounted() {},
};
</script>
