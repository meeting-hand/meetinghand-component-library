<template>
  <a-input-number
    v-model:value="value"
    :min="min"
    :max="max"
    :step="step"
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :parser="parser"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import { InputNumber } from "ant-design-vue";

import { computed } from "vue";

export default {
  name: "InputNumberDefault",
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

    const parser = (e) => {
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
    };
  },
};
</script>
