<template>
  <component
    :is="componentType"
    v-model="value"
    :label="label"
    :disabled="disabled"
    :data="data"
    :hasError="hasError"
    :errorMessage="errorMessage"
  >
    <slot></slot>
  </component>
</template>

<script>
import Single from "./types/single.vue";
import Multiple from "./types/multiple.vue";

export default {
  name: "MhCheckbox",
  props: {
    modelValue: {
      type: [Boolean, Array],
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
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
  },
  components: {
    Single,
    Multiple,
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
    componentType() {
      return this.data !== null ? "multiple" : "single";
    },
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
