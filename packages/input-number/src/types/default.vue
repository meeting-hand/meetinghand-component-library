<template>
  <div class="mh-input-number-text">
    <span v-if="title" class="mh-input__title">{{ title }}</span>
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
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import { InputNumber } from "ant-design-vue";
import { computed } from "vue";

import MhIcon from "@meetinghand/style/icons/index.vue";
import Tooltip from "../../../tooltip/src/index.vue";

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
    title: {
      type: String,
      default: null,
    },
    tooltip: {
      type: String,
      default: null,
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
