<template>
  <div class="mh-text-area">
    <div v-if="title" class="mh-input-text">
      <span class="mh-input__title">{{ title }}</span>
      <tooltip v-if="tooltip" size="large" placement="top" :text="tooltip">
        <mh-icon name="system-info" />
      </tooltip>
    </div>
    <a-textarea
      v-model:value="value"
      :placeholder="placeholder"
      :auto-size="{ minRows: Number(minRows), maxRows: Number(maxRows) }"
      :disabled="disabled"
      :class="[{ error: errorStatus }]"
    />
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
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
    errorStatus: function (props) {
      return props.hasError || props.errorMessage;
    },
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
