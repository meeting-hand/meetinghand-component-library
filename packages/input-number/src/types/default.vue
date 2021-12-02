<template>
  <div v-if="title" class="mh-input-number-text">
    <span class="mh-input__title">{{ title }}</span>
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

<script>
import { InputNumber } from "ant-design-vue";
import { computed } from "vue";

import MhIcon from "@meetinghand/style/icons/index.vue";
import Tooltip from "@meetinghand/tooltip/src/index.vue";

export default {
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
    title: {
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

    const formatter = (e) => {
      if (props.symbol) {
        return props.symbolAlignment === "left"
          ? `${props.symbol}${e}`
          : `${e}${props.symbol}`;
      }
      return e;
    };

    const parser = (e) => {
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
};
</script>
