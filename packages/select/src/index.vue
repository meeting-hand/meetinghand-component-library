<template>
  <component
    :is="inputType"
    :hasError="hasError"
    :errorMessage="errorMessage"
    :disabled="disabled"
    :placeholder="placeholder"
    :options="options"
    :searchable="searchable"
    v-model="value"
    :size="size"
  >
  </component>
</template>

<script>
import { computed } from "vue";

import { Select } from "ant-design-vue";
import Default from "./types/default.vue";
import Country from "./types/country.vue";

import defaultProps from "./utils/props";

export default {
  name: "MhSelect",
  components: {
    [Select.name]: Select,
    Default,
    Country,
  },
  props: {
    ...defaultProps,
    inputType: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "country"].includes(_v),
    },
  },
  setup(props, { emit }) {
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
    };
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
