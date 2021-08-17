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
    :size="size"
    :suffixIcon="suffixIcon"
    :id="id"
    :mode="mode"
    v-model:value="value"
  >
  </a-select>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import { computed, h } from "vue";

import { Select } from "ant-design-vue";
import ArrowIcon from "@meetinghand/style/icons/chevronDown.vue";

import defaultProps from "../utils/props";

export default {
  name: "default",
  components: {
    [Select.name]: Select,
  },
  props: {
    ...defaultProps,
  },
  setup(props, { emit }) {
    const suffixIcon = h(ArrowIcon);

    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const mode = Array.isArray(props.modelValue) ? "multiple" : undefined;

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
      mode,
    };
  },
};
</script>
