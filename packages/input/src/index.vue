<template>
  <component
    :is="inputType"
    :hasError="hasError"
    :errorMessage="errorMessage"
    :disabled="disabled"
    :placeholder="placeholder"
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
    :allowClear="allowClear"
  />
</template>

<script>
import Default from "./types/default";
import Password from "./types/password";
import Tel from "./types/tel";

export default {
  name: "MhInput",
  components: {
    Default,
    Password,
    Tel,
  },
  props: {
    inputType: {
      type: String,
      default: "default",
    },
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
    leftIcon: {
      type: String,
      default: null,
    },
    rightIcon: {
      type: String,
      default: null,
    },
    allowClear: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
