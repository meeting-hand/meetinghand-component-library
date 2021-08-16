<template>
  <a-button
    type="default"
    :class="[{ disabled: disabled }, { active: isActive }, `tab-btn`]"
    :htmlType="submit ? 'submit' : 'button'"
    :disabled="disabled"
  >
    <slot></slot>
  </a-button>
</template>
<script>
import { Button } from "ant-design-vue";
export default {
  name: "MhButtonTab",
  components: {
    [Button.name]: Button,
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
  },
};
</script>