<template>
  <a-radio v-model:checked="value" :disabled="disabled">{{ text }}</a-radio>
</template>

<script>
import Radio from "ant-design-vue/lib/radio";

export default {
  name: "MhRadio",
  components: {
    [Radio.name]: Radio,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    data: {
      type: [String, Number],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue == this.data;
      },
      set(status) {
        if (status) {
          this.$emit("update:modelValue", this.data);
        } else {
          this.$emit("update:modelValue", null);
        }
      },
    },
  },
};
</script>
