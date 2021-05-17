<template>
  <a-button style="min-width: 400px; min-height: 300px">
    <slot></slot>
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
export default {
  name: "MhButton",
  components: {
    [Button.name]: Button,
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
