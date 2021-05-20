<template>
  <a-checkbox v-model:checked="value" :disabled="disabled">
    {{ label }}
  </a-checkbox>
</template>

<script>
import Checkbox from "ant-design-vue/lib/checkbox";

export default {
  name: "MhCheckboxSingle",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    data: {
      type: [String, Number],
      default: null,
    },
  },
  components: {
    [Checkbox.name]: Checkbox,
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