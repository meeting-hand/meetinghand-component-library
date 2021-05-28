<template>
  <a-range-picker
    v-model:value="value"
    :format="format"
    :valueFormat="format[0]"
    :class="[
      { error: hasError },
      'mh-range-picker',
      { 'mh-range-picker-opened': status },
    ]"
    :disabled="disabled"
    :placeholder="placeholder"
    :allowClear="false"
    @openChange="openChange"
    separator=""
  />
</template>

<script>
import DatePicker from "ant-design-vue/lib/date-picker";

export default {
  name: "MhDatePickerRange",
  components: {
    [DatePicker.RangePicker.name]: DatePicker.RangePicker,
  },
  data() {
    return {
      status: false,
    };
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
  methods: {
    openChange(status) {
      this.status = status;
    },
  },
};
</script>
