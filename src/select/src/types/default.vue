<template>
  <a-select
    class="mh-dropdown"
    :class="[{ error: hasError }, 'mh-dropdown', { disabled: disabled }]"
    :disabled="disabled"
    :filter-option="filterOption"
    :placeholder="placeholder"
    option-label-prop="label"
    :show-search="searchable"
    :size="size"
    :suffixIcon="suffixIcon"
    :removeIcon="removeIcon"
    :id="id"
    :mode="mode"
    allow-clear
    v-model:value="value"
  >
    <template v-slot:notFoundContent>
      <div class="mh-select-empty-state">
        <mh-icon name="system-status-error" />
        <span>{{ emptyStateDescription }}</span>
      </div>
    </template>
    <a-select-option
      :disabled="opt.disabled"
      :value="opt.value"
      :label="opt.selectedLabel"
      :key="keyOpt"
      v-for="(opt, keyOpt) in optionsList"
    >
      <span v-html="opt.label"></span>
    </a-select-option>
  </a-select>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script lang="ts">
import { computed, h, defineComponent, ComputedRef } from "vue";

import { Select } from "ant-design-vue";
import MhIcon from "../../../style/icons";

import defaultProps from "../utils/props";

export default defineComponent({
  name: "default",
  components: {
    [Select.name]: Select,
    ASelectOption: Select.Option,
    MhIcon,
  },
  props: {
    ...defaultProps,
  },
  setup(props, { emit }) {
    const suffixIcon = h(MhIcon, { name: "chevron-down" });

    const removeIcon = h(MhIcon, { name: "system-close" });

    const optionsList: ComputedRef<any[]> = computed(() =>
      props.options.map((option: any) => {
        return {
          ...option,
          selectedLabel: option.selectedLabel || option.label,
        };
      })
    );

    const filterOption = (input: string, option: any) => {
      return (
        optionsList.value[option.key].label
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    };

    const mode =
      Array.isArray(props.modelValue) || props.multiple
        ? "multiple"
        : undefined;

    const value = computed({
      get() {
        return props.multiple && !Array.isArray(props.modelValue)
          ? []
          : props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });

    if (mode === "multiple" && !Array.isArray(props.modelValue)) {
      value.value = [];
    }

    return {
      value,
      filterOption,
      suffixIcon,
      mode,
      removeIcon,
      optionsList,
    };
  },
});
</script>
