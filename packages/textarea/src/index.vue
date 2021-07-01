<template>
  <div class="mh-input-text">
    <span v-if="title" class="mh-input__title">{{ title }}</span>
    <tooltip v-if="tooltip" size="large" placement="top" :text="tooltip">
      <mh-icon name="system-info" />
    </tooltip>
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
import { Input } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
import Tooltip from "../../tooltip/src/index.vue";

export default {
  name: "MhTextArea",
  components: {
    [Input.TextArea.name]: Input.TextArea,
    "mh-icon": MHIcon,
    Tooltip,
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
    tooltip: {
      type: String,
      default: null,
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

<style lang="scss">
@import "./assets/main.scss";
</style>
