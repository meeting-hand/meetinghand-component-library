<template>
  <component
    :is="type"
    v-model="value"
    :min="min"
    :max="max"
    :step="step"
    :hasError="hasError"
    :disabled="disabled"
    :currency="currency"
  />
</template>

<script>
import Default from "./types/default";
import Currency from "./types/currency";

export default {
  name: "InputNumber",
  components: {
    Default,
    Currency,
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
    currency: {
      type: String,
      default: "USD",
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