<template>
  <a-select
    class="mh-dropdown"
    :class="[{ error: hasError }, 'mh-dropdown', { disabled: disabled }]"
    :disabled="disabled"
    :filter-option="filterOption"
    :placeholder="placeholder"
    :options="options"
    option-filter-prop="label"
    :show-search="searchable"
    v-model:value="value"
    :size="size"
    :suffixIcon="suffixIcon"
  >
  </a-select>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import { Select } from "ant-design-vue";
import ArrowIcon from "@meetinghand/style/icons/chevronDown.vue";

import { computed, h } from "vue";

export default {
  name: "MhSelect",
  components: {
    [Select.name]: Select,
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
      validator: (_o) =>
        _o.every(
          (_i) => _i.hasOwnProperty("value") && _i.hasOwnProperty("label")
        ),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "small"].includes(_v),
    },
  },
  setup(props, { emit }) {
    const suffixIcon = h(ArrowIcon);

    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });

    return {
      value,
      filterOption,
      suffixIcon,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
