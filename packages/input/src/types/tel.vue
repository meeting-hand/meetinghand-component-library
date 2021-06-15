<template>
  <div class="mh-input">
    <a-input
      :placeholder="placeholder"
      :class="[{ error: errorStatus }, 'mh-tel-input', { disabled: disabled }]"
      :disabled="disabled"
      ref="telInput"
      :id="id"
      :defaultValue="defaultValue"
      @change="inputChanged"
    >
      <template #addonBefore>
        <a-select
          v-model:value="dialCode"
          :options="phoneCodes"
          :suffixIcon="suffixIcon"
          option-filter-prop="label"
          :filter-option="filterOption"
          show-search
          @change="setCleave"
          :disabled="disabled"
        >
        </a-select>
      </template>
    </a-input>
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
import { Input } from "ant-design-vue";
import Select from "ant-design-vue/lib/select";

import "ant-design-vue/lib/select/style/index.less";

import CountryPhoneCodes from "../utils/countryPhoneCodes";
import ArrowIcon from "@meetinghand/style/icons/chevronDown.vue";

import Cleave from "cleave.js";

import { h, ref, onMounted, computed } from "vue";

import inputProps from "../utils/props";

export default {
  name: "MhInputTel",
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
  },
  props: inputProps,
  setup(props, { emit }) {
    // phone dialCode
    const phoneCodes = CountryPhoneCodes.map((_c) => {
      return {
        value: _c.dialCode,
        //label: `(${_c.dialCode}) ${_c.countryCode}`,
        label: `${_c.dialCode}`,
      };
    });

    const dialCode = ref("+1");
    //const id = ref("_" + Math.random().toString(36).substr(2, 9));
    let cleave;

    //filter
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const suffixIcon = h(ArrowIcon);

    const setCleave = async (dialCode) => {
      const country = CountryPhoneCodes.find((_c) => _c.dialCode === dialCode);

      await import(
        `../utils/cleave-country-formats/cleave-phone.${country.countryCode.toLowerCase()}.js`
      );

      cleave = new Cleave(document.getElementById(props.id), {
        phone: true,
        phoneRegionCode: country.countryCode.toLowerCase(),
      });
      inputChanged(value.value);
    };

    const value = computed({
      get() {
        return props.modelValue;
      },
      set() {
        emit(
          "update:modelValue",
          `(${dialCode._value}) ${cleave.getFormattedValue()}`
        );
      },
    });

    const valueDialCode = computed(() => {
      if (value.value) {
        const dialCodeResult = value.value.match(/^[(]*.+[)]{1}/g);
        if (dialCodeResult) {
          return dialCodeResult[0].replace("(", "").replace(")", "");
        }
      }
      return null;
    });

    const defaultValue = computed(() => {
      return !value.value ? "" : value.value.replace(/ *\([^)]*\) */g, "");
    });

    const inputChanged = (data) => {
      value.value = data;
    };

    const errorStatus = computed(() => {
      return props.hasError || props.errorMessage;
    });

    onMounted(() => {
      if (valueDialCode.value) {
        dialCode.value = valueDialCode.value;
      }
      // TODO: refactor
      setTimeout(() => {
        setCleave(dialCode.value);
      }, 500);
    });

    return {
      phoneCodes,
      suffixIcon,
      filterOption,
      setCleave,
      dialCode,
      suffixIcon,
      value,
      cleave,
      inputChanged,
      valueDialCode,
      defaultValue,
      errorStatus,
    };
  },
};
</script>
