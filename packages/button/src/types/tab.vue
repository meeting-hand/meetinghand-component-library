<template>
  <a-button
    type="default"
    :class="[{ disabled: disabled }, { active: isActive }, `tab-btn`]"
    :htmlType="submit ? 'submit' : 'button'"
    :disabled="disabled"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
  </a-button>
</template>
<script>
import { Button } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonTab",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>
