<template>
  <a-input
    :placeholder="placeholder"
    :class="[{ error: hasError }]"
    :disabled="disabled"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
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
    errorMessage: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  components: {
    [Input.name]: Input,
  },
};
</script>

<style scoped>
</style>
