<template>
  <div :class="['mh-select', className]">
    <label :for="elId" v-if="label" class="mh-select-label">
      {{ label }}
      <slot name="tooltip"></slot>
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

<script lang="ts">
import { computed, defineComponent } from "vue";

import Default from "./types/default.vue";
import Country from "./types/country.vue";

import defaultProps from "./utils/props";

export default defineComponent({
  name: "MhSelect",
  components: {
    Default,
    Country,
  },
  props: {
    ...defaultProps,
    inputType: {
      type: String,
      default: "default",
      validator: (_v: string) => ["default", "country"].includes(_v),
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
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
