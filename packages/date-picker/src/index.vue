<template>
  <component
    :is="type"
    :id="elemId"
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
import Default from "./types/default.vue";
import Range from "./types/range.vue";

// TODO: disabled dates
export default {
  name: "MhDatePicker",
  data() {
    return {
      elemId: "_" + Math.random().toString(36).substr(2, 9),
    };
  },
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
    id: {
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
  created() {
    this.elemId = this.id ? this.id : this.elemId;
  },
};
</script>
