<template>
  <a-button
    :class="[`size-${size}`, { disabled: disabled }, 'iconic-btn']"
    :disabled="disabled"
  >
    <mh-icon :name="icon" v-if="icon" />
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
import MHIcon from "@meetinghand/style/icons/index";
export default {
  name: "MhButtonRow",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    size: {
      type: String,
      default: "normal",
      validator: (_v) => ["normal", "circular", "small", "tiny"].includes(_v),
    },
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
