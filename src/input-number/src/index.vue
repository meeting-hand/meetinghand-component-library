<template>
  <div class="mh-input-number">
    <component
      :is="type"
      v-model="value"
      :min="min"
      :max="max"
      :step="step"
      :hasError="hasError"
      :disabled="disabled"
      :currency="currency"
      :errorMessage="errorMessage"
      :label="label"
      :tooltip="tooltip"
      :symbol="symbol"
      :symbolAlignment="symbolAlignment"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Default from "./types/default.vue";
import Currency from "./types/currency.vue";

export default defineComponent({
  name: "InputNumber",
  components: {
    Default,
    Currency,
  },
  props: {
    modelValue: {
      type: Number,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 999999,
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
      validator: (_t: string) => ["default", "currency"].includes(_t),
    },
    currency: {
      type: String,
      default: "USD",
    },
    label: {
      type: String,
      default: null,
    },
    tooltip: {
      type: String,
      default: null,
    },
    symbol: {
      type: String,
      default: null,
    },
    symbolAlignment: {
      type: String,
      default: "right",
      validator: (data: string) => ["left", "right"].includes(data),
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value: number) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
