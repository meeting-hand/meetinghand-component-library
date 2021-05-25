<template>
  <a-date-picker v-model:value="value" :format="format" :valueFormat="format" />
</template>

<script>
import DatePicker from "ant-design-vue/lib/date-picker";

export default {
  name: "MhDatePicker",
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
};
</script>
