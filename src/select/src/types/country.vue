<template>
  <a-select
    class="mh-dropdown country-select"
    :class="[{ error: hasError }, 'mh-dropdown', { disabled: disabled }]"
    :disabled="disabled"
    :filter-option="filterOption"
    :placeholder="placeholder"
    show-search
    v-model:value="value"
    :size="size"
    :id="id"
    :suffixIcon="suffixIcon"
  >
    <a-select-option
      :value="country.value"
      v-for="country in countryOptions"
      :key="country.value + country.label"
      :label="country.label"
    >
      <span class="country-wrapper">
        <img
          :src="`https://meetinghand.s3.eu-central-1.amazonaws.com/assets/imgs/svg/flags/${country.value}.svg`"
          crossorigin="anonymous"
        />
        {{
          truncate(country.label, {
            length: Number(truncateLength),
            separator: ",",
          })
        }}
      </span>
    </a-select-option>
    <template v-slot:notFoundContent>
      <div class="mh-select-empty-state">
        <mh-icon name="system-status-error" />
        <span>{{ emptyStateDescription }}</span>
      </div>
    </template>
    <template v-slot:placeholder> hey!! </template>
  </a-select>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script lang="ts">
import { computed, h, ref, defineComponent } from "vue";

import { Select } from "ant-design-vue";

import MhIcon from "../../../style/icons";

import { truncate } from "lodash";
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
    const countryOptions = ref([]);

    const filterOption = (input: string, option: any) => {
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

    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://meetinghand.s3.eu-central-1.amazonaws.com/assets/resources/countries.json"
        );
        const countries = await response.json();
        countryOptions.value = countries.map((_c: any) => {
          return {
            label: _c.name,
            value: _c.code,
          };
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();

    return {
      value,
      filterOption,
      suffixIcon,
      countryOptions,
      truncate,
    };
  },
});
</script>
<style lang="scss" scoped>
.country-select {
  min-width: 190px !important;
}
.country-wrapper {
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
}
</style>
