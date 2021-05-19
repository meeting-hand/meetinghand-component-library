<template>
  <a-input
    placeholder="Basic usage"
    :class="[{ error: hasError }]"
    :disabled="disabled"
  />
</template>

<script>
import Input from "ant-design-vue/lib/input";
export default {
  name: "MhInput",
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    [Input.name]: Input,
  },
};
</script>

<style scoped>
</style>
