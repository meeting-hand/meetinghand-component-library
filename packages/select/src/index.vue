<template>
  <a-select
    class="mh-dropdown"
    :disabled="disabled"
    :filter-option="filterOption"
    :placeholder="placeholder"
    :options="options"
    option-filter-prop="label"
    :show-search="searchable"
    v-model:value="value"
  >
  </a-select>
</template>

<script>
import Select from "ant-design-vue/lib/select";

import { computed } from "vue";

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
  },
  setup(props, { emit }) {
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
    };
  },
};
</script>
