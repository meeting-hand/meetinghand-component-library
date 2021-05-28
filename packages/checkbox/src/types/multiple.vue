<template>
  <a-checkbox v-model:checked="value" :disabled="disabled">
    {{ label }}
  </a-checkbox>
</template>

<script>
import Checkbox from "ant-design-vue/lib/checkbox";

export default {
  name: "MhCheckboxMultiple",
  props: {
    modelValue: {
      type: Array,
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
        return this.modelValue.includes(this.data);
      },
      set(value) {
        if (!value) {
          this.$emit(
            "update:modelValue",
            this.modelValue.filter((_v) => _v !== this.data)
          );
        } else {
          this.$emit("update:modelValue", this.modelValue.concat([this.data]));
        }
      },
    },
  },
};
</script>