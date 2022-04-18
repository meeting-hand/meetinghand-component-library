<template>
  <div class="mh-date-picker-label" v-if="label">
    <label>
      {{ label }}
      <slot name="tooltip"> </slot>
    </label>
  </div>
  <a-date-picker
    v-model:value="value"
    :format="format"
    :valueFormat="format"
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :placeholder="placeholder"
    :id="id"
    :disabledDate="disabledDate"
    :allowClear="false"
  >
    <template #suffixIcon>
      <chevron-down />
    </template>
  </a-date-picker>
</template>

<script>
import { computed, h } from "vue";

import { DatePicker } from "ant-design-vue";
import ChevronDown from "@meetinghand/style/icons/chevronDown.vue";

export default {
  name: "MhDatePickerDefault",
  components: {
    [DatePicker.name]: DatePicker,
    ChevronDown,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    format: {
      type: String,
      default: "DD.MM.YYYY",
      validator: (_v) => ["DD.MM.YYYY", "MM.DD.YYYY"].includes(_v),
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "_" + Math.random().toString(36).substr(2, 9),
    },
    disabledStartDate: {
      type: [String, Date],
    },
    disabledEndDate: {
      type: [String, Date],
    },
    label: {
      type: String,
      default: null,
    },
    labelLeft: {
      type: String,
      default: null,
    },
    labelRight: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });

    const disabledDate = (_d) => {
      _d = _d.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
      if (
        props.disabledStartDate &&
        new Date(props.disabledStartDate).getTime() >= new Date(_d).getTime()
      ) {
        return true;
      }
      if (
        props.disabledEndDate &&
        new Date(_d).getTime() > new Date(props.disabledEndDate).getTime()
      ) {
        return true;
      }
      return false;
    };

    return {
      value,
      disabledDate,
    };
  },
};
</script>
