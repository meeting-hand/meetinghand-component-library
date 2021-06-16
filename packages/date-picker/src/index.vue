<template>
  <component
    :is="type"
    :id="id"
    :format="format"
    :disabled="disabled"
    :placeholder="placeholder"
    :hasError="hasError"
    :disabledStartDate="disabledStartDate"
    :disabledEndDate="disabledEndDate"
    v-model="value"
  />
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import Default from "./types/default.vue";
import Range from "./types/range.vue";

import "./assets/main.scss";

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
    },
    type: {
      type: String,
      default: "default",
    },
    id: {
      type: String,
      default: "_" + Math.random().toString(36).substr(2, 9),
    },
    disabledStartDate: {
      type: [String, Date],
      default: null,
    },
    disabledEndDate: {
      type: [String, Date],
      default: null,
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
