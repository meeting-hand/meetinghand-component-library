<template>
  <component
    :is="type"
    :format="format"
    :disabled="disabled"
    :placeholder="placeholder"
    :hasError="hasError"
    v-model="value"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import Default from "./types/default";
import Range from "./types/range";

export default {
  name: "MhDatePicker",
  components: {
    Default,
    Range,
  },
  props: {
    modelValue: {
      type: [String, Array],
      default: "",
    },
    format: {
      type: [String, Array],
      default: "DD.MM.YYYY",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: [String, Array],
      default: "",
    },
    type: {
      type: String,
      default: "default",
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
