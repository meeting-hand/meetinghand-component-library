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
  name: "MhCheckboxMultiple",
  props: {
    modelValue: {
      type: Array,
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
        return (
          Array.isArray(this.modelValue) && this.modelValue.includes(this.data)
        );
      },
      set(value) {
        if (!value) {
          this.$emit(
            "update:modelValue",
            this.modelValue.filter((_v) => _v !== this.data)
          );
        } else {
          this.$emit(
            "update:modelValue",
            Array.isArray(this.modelValue)
              ? [...this.modelValue, this.data]
              : [this.data]
          );
        }
      },
    },
  },
};
</script>
