<template>
  <a-button type="primary" :class="[`size-${size}`]">
    <slot></slot>
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
export default {
  components: {
    [Button.name]: Button,
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
};
</script>
<style scoped>
.ant-btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 16px 32px;
  height: auto;
  border-radius: 4px;
}
.size-large {
  min-width: 360px;
}
</style>
