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
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :parser="parser"
    :formatter="formatter"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import InputNumber from "ant-design-vue/es/input-number";
import MhIcon from "../../../style/icons";
import Tooltip from "../../../tooltip";

export default defineComponent({
  name: "InputNumberDefault",
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

  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });

    const formatter = (e: any) => {
      if (props.symbol) {
        return props.symbolAlignment === "left"
          ? `${props.symbol}${e}`
          : `${e}${props.symbol}`;
      }
      return e;
    };

    const parser = (e: any) => {
      e = e.toString().replace(props.symbol, "");
      if (e == "") {
        e = props.min;
      }
      e = parseFloat(e);
      if (isNaN(e)) {
        e = props.modelValue;
      }
      return e;
    };

    return {
      value,
      parser,
      formatter,
    };
  },
});
</script>
