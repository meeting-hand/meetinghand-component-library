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
    v-model="value"
  />
</template>

<script>
import Default from "./types/default.vue";
import Password from "./types/password.vue";
import Tel from "./types/tel.vue";
import { computed } from "vue";

export default {
  name: "MhInput",
  components: {
    Default,
    Password,
    Tel,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "tel", "password"].includes(_v),
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
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });
    return {
      value,
    };
  },
};
</script>
