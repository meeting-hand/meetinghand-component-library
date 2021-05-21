<template>
  <component
    :is="type"
    v-model="value"
    :min="min"
    :max="max"
    :step="step"
    :hasError="hasError"
    :disabled="disabled"
  />
</template>

<script>
import Default from "./types/default";

export default {
  name: "InputNumber",
  components: {
    Default,
  },
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
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
    type: {
      type: String,
      default: "default",
      validator: (_t) => ["default", "currency"].includes(_t),
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>