<template>
  <a-button type="primary" :class="[`size-${size}`]">
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
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
  },
  mounted() {},
};
</script>
