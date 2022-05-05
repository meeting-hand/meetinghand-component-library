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

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MhCheckboxMultiple",
  props: {
    modelValue: {
      type: Array as () => any[],
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
    errorStatus: function (props: any) {
      return props.hasError || props.errorMessage;
    },
    value: {
      get() {
        return (
          Array.isArray(this.modelValue) && this.modelValue.includes(this.data)
        );
      },
      set(value: boolean) {
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
});
</script>
