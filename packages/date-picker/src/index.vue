<template>
  <div class="mh-date-picker">
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
      :labelLeft="labelLeft"
      :labelRight="labelRight"
      :label="label"
    >
      <template v-slot:tooltip>
        <slot name="tooltip"> </slot>
      </template>
    </component>
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
import Default from "./types/default.vue";
import Range from "./types/range.vue";

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
      type: String,
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
    labelLeft: {
      type: String,
      default: null,
    },
    labelRight: {
      type: String,
      default: null,
    },
    label: {
      type: String,
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
<style lang="scss">
@import "./assets/main.scss";
</style>
