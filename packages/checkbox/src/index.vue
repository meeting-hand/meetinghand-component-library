<template>
  <a-checkbox v-model:checked="value" :disabled="disabled">
    {{ label }}
  </a-checkbox>
</template>

<script>
import Checkbox from "ant-design-vue/lib/checkbox";
import CheckboxGroup from "ant-design-vue/lib/checkbox/Group";

export default {
  name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
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