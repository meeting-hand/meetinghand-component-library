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

<script lang="ts">
import { defineComponent } from "vue";

import Single from "./types/single.vue";
import Multiple from "./types/multiple.vue";

export default defineComponent({
  name: "MhCheckbox",
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: false,
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
      set(value: any) {
        this.$emit("update:modelValue", value);
      },
    },
    componentType() {
      return this.data !== null ? "multiple" : "single";
    },
  },
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
