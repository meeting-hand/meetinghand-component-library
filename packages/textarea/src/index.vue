<template>
  <a-textarea
    v-model:value="value"
    :placeholder="placeholder"
    :auto-size="{ minRows: Number(minRows), maxRows: Number(maxRows) }"
    :disabled="disabled"
    :class="[{ error: hasError }]"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import TextArea from "ant-design-vue/lib/input/TextArea";
import MHIcon from "@meetinghand/style/icons/index";

export default {
  name: "MhTextArea",
  components: {
    [TextArea.name]: TextArea,
    "mh-icon": MHIcon,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    minRows: {
      type: String,
      default: "5",
    },
    maxRows: {
      type: String,
      default: "7",
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(data) {
        this.$emit("update:modelValue", data);
      },
    },
  },
};
</script>

<style scoped>
</style>
