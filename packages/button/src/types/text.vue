<template>
  <a-button type="danger">
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
