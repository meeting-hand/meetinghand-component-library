<template>
  <a-range-picker
    v-model:value="value"
    :format="format"
    :valueFormat="format[0]"
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :placeholder="placeholder"
    :suffix-icon="icon"
    :allowClear="false"
  />
</template>

<script>
import DatePicker from "ant-design-vue/lib/date-picker";

import MhDate from "@meetinghand/style/icons/uiDate";
import { h } from "vue";

export default {
  name: "MhDatePickerRange",
  components: {
    [DatePicker.RangePicker.name]: DatePicker.RangePicker,
  },
  props: {
    modelValue: {
      type: Array,
      default: () => ["", ""],
    },
    format: {
      type: Array,
      default: () => ["DD.MM.YYYY", "DD.MM.YYYY"],
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
      type: Array,
      default: () => ["", ""],
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
  setup() {
    const icon = h(MhDate);
    return {
      icon,
    };
  },
};
</script>
