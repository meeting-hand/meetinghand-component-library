<template>
  <div :class="['mh-select', className]">
    <label :for="elId" v-if="label" class="mh-select-label">
      {{ label }}
    </label>
    <component
      :is="inputType"
      :id="elId"
      :hasError="hasError"
      :errorMessage="errorMessage"
      :disabled="disabled"
      :placeholder="placeholder"
      :options="options"
      :searchable="searchable"
      :multiple="multiple"
      v-model="value"
      :size="size"
      :truncateLength="truncateLength"
      :emptyStateDescription="emptyStateDescription"
    >
    </component>
  </div>
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
    label: {
      type: String,
      default: null,
    },
    className: {
      type: String,
      default: null,
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

    const elId = props.id || "_" + Math.random().toString(36).substr(2, 9);

    return {
      value,
      elId,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
