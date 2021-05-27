<template>
  <a-input
    :placeholder="placeholder"
    :class="[
      { error: hasError },
      'mh-input',
      'mh-tel-input',
      { disabled: disabled },
    ]"
    :disabled="disabled"
    ref="telInput"
    :id="id"
    v-model:value="value"
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
      >
      </a-select>
    </template>
  </a-input>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import Input from "ant-design-vue/lib/input";
import Select from "ant-design-vue/lib/select";

import CountryPhoneCodes from "../utils/countryPhoneCodes";
import ArrowIcon from "@meetinghand/style/icons/chevronDown";

import Cleave from "cleave.js";

import { h, ref, onMounted, computed } from "vue";

export default {
  name: "MhInputTel",
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
  },
  props: {
    modelValue: {
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
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    leftIcon: {
      type: String,
      default: null,
    },
    rightIcon: {
      type: String,
      default: null,
    },
    allowClear: {
      type: Boolean,
      default: false,
    },
  },
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
    const id = ref("_" + Math.random().toString(36).substr(2, 9));

    //filter
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const suffixIcon = h(ArrowIcon);

    const setCleave = async (dialCode) => {
      const country = CountryPhoneCodes.find((_c) => _c.dialCode === dialCode);
      await require(`cleave.js/dist/addons/cleave-phone.${country.countryCode.toLowerCase()}`);

      new Cleave(document.getElementById(id.value), {
        phone: true,
        phoneRegionCode: country.countryCode.toLowerCase(),
      });
    };

    onMounted(setCleave(dialCode.value));

    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });

    return {
      phoneCodes,
      suffixIcon,
      filterOption,
      setCleave,
      dialCode,
      id,
      suffixIcon,
      value,
    };
  },
};
</script>
