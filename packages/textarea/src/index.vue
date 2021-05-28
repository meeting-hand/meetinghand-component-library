<template>
  <div class="mh-input-text">
    <h1 v-if="title" class="mh-input__title">{{ title }}</h1>
    <mh-icon :name="icon" v-if="icon" />
  </div>
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
import MHIcon from "@meetinghand/style/icons";

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
    title: {
      type: String,
      default: null,
    },
    icon: {
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
