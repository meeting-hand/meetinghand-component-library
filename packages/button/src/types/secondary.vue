<template>
  <a-button type="primary">
    <slot></slot>
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
export default {
  components: {
    [Button.name]: Button,
  },
};
</script>
