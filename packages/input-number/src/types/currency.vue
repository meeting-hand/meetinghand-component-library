<template>
  <div v-if="label" class="mh-input-number-text">
    <span class="mh-input__title">{{ label }}</span>
    <tooltip v-if="tooltip" size="large" placement="top" :text="tooltip">
      <mh-icon name="system-info" />
    </tooltip>
  </div>
  <a-input-number
    v-model:value="value"
    :min="min"
    :max="max"
    :step="step"
    :class="[{ error: hasError }, 'currency-input']"
    :disabled="disabled"
    :formatter="formatCurrency"
    :parser="parseCurrency"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import { convertCurrencyFormat } from "../utils/currency";

import InputNumber from "ant-design-vue/es/input-number";
import accounting from "accounting";
import MhIcon from "@meetinghand/style/icons/index.vue";
import Tooltip from "@meetinghand/tooltip";

export default {
  name: "InputNumberCurrency",
  components: {
    [InputNumber.name]: InputNumber,
    MhIcon,
    Tooltip,
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
    currency: {
      type: String,
      required: true,
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
      return convertCurrencyFormat(this.currency);
    },
  },

  methods: {
    formatCurrency(e) {
      e = accounting.formatMoney(e, this.moneyFormat);
      return e;
    },

    parseCurrency(e) {
      // full delete
      if (e == "") {
        return 0;
      }

      // ignore decimal delete
      if (
        !e.includes(this.moneyFormat.decimal) &&
        e.length > this.moneyFormat.symbol.length + 1
      ) {
        return this.value;
      }
      // when selected all text except symbol
      else if (e.length === this.moneyFormat.symbol.length + 1) {
        e = accounting.unformat(e, this.moneyFormat.decimal);
        return e / Math.pow(10, this.moneyFormat.precision);
      }

      e = this.convertDecimal(e);
      e = accounting.unformat(e, this.moneyFormat.decimal);

      return e;
    },

    convertDecimal(e) {
      const split = e.split(this.moneyFormat.decimal);

      // first char enter decimal check
      if (split.length === 1 && !isNaN(parseInt(e))) {
        return e / Math.pow(10, this.moneyFormat.precision);
      }

      const decimal = split[split.length - 1];

      // 12.532 => 125.32
      if (
        decimal.length > this.moneyFormat.precision &&
        !isNaN(parseInt(decimal[decimal.length - 1]))
      ) {
        e =
          split[0] +
          decimal[0] +
          this.moneyFormat.decimal +
          decimal.replace(decimal[0], "");
      }
      return e;
    },
  },
};
</script>
