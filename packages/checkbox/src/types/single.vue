<template>
  <label
    :class="[
      'mh-checkbox',
      { 'mh-checkbox-disabled': disabled },
      { 'mh-checkbox-error': errorStatus },
    ]"
  >
    <input
      type="checkbox"
      name="checkbox"
      v-model="value"
      :disabled="disabled"
    />
    {{ label }}
    <slot> </slot>
  </label>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
export default {
  name: "MhCheckboxSingle",
  props: {
    modelValue: {
      type: Boolean,
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
  computed: {
    errorStatus: function (props) {
      return props.hasError || props.errorMessage;
    },
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
