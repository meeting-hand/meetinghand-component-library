<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[
      `mh-list-button`,
      `mh-button`,
      `alignment-${iconAlignment}`,
      { wait: wait },
      { disabled: disabled },
    ]"
    :disabled="disabled || wait"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot v-if="!wait"></slot>
    <mh-icon name="wait" class="wait-spinner" v-if="wait" />
  </button>
</template>
<script>
import { Button } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonPrimary",
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
