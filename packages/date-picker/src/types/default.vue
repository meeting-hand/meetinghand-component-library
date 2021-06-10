<template>
  <a-date-picker
    v-model:value="value"
    :format="format"
    :valueFormat="format"
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :placeholder="placeholder"
    :suffix-icon="icon"
    :id="id"
    :allowClear="false"
  />
</template>

<script>
import DatePicker from "ant-design-vue/lib/date-picker";

import MhDate from "@meetinghand/style/icons/uiDate.vue";
import { h } from "vue";

export default {
  name: "MhDatePickerDefault",
  components: {
    [DatePicker.name]: DatePicker,
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
