<template>
  <a-input-number
    v-model:value="value"
    :min="min"
    :max="max"
    :step="step"
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :formatter="formatCurrency"
    :parser="parseCurrency"
    :precision="moneyFormat.precision"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
  {{ value }}
</template>

<script>
import InputNumber from "ant-design-vue/lib/input-number";
import accounting from "accounting-js";

export default {
  name: "InputNumberCurrency",
  components: {
    [InputNumber.name]: InputNumber,
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
      default: 10000,
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
    currency: {
      type: String,
      required: true,
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
    moneyFormat() {
      return {
        decimal: ".",
        thousands: ",",
        precision: 2,
        symbol: "₺",
      };
    },
  },

  methods: {
    formatCurrency(e) {
      e = this.convertDecimal(e);
      e = accounting.formatMoney(e, this.moneyFormat);
      return e;
    },

    parseCurrency(e) {
      e = accounting.unformat(e, this.moneyFormat.decimal);
      e = this.convertDecimal(e);
      e = this.decimalSeperatorCancel(e);
      return e;
    },

    decimalSeperatorCancel(num) {
      // decimal sepeareter delete
      if (num === this.value * Math.pow(10, this.moneyFormat.precision)) {
        num = this.value;
      }
      return num;
    },

    convertDecimal(e) {
      if (this.countDecimals(e) === this.moneyFormat.precision + 1) {
        let lastChar = e.toString()[e.toString().length - 1];
        e = this.value * Math.pow(10, this.moneyFormat.precision - 1);
        e += lastChar / Math.pow(10, this.moneyFormat.precision);
      }
      return e;
    },
    countDecimals(value) {
      if (isNaN(parseFloat(value))) return this.moneyFormat.precision;
      if (Math.floor(value) === value) return 0;
      return value.toString().split(".")[1].length || 0;
    },
  },
};
</script>