<template>
  <a-button
    type="primary"
    :class="[
      `menu-btn`,
      `alignment-${iconAlignment}`,
      { wait: wait },
      { disabled: disabled },
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
import { Button } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonMenu",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
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
  },
};
</script>
