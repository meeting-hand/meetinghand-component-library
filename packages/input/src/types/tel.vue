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
</template>

<script>
import Input from "ant-design-vue/lib/input";
import Select from "ant-design-vue/lib/select";
import MhIcon from "@meetinghand/style/icons/index";

import CountryPhoneCodes from "../utils/countryPhoneCodes";
import ArrowIcon from "@meetinghand/style/icons/chevronDown";

import Cleave from "cleave.js";

import { h } from "vue";

//TODO: select has an error

export default {
  name: "MhInputTel",
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
    MhIcon,
  },
  data() {
    return {
      dialCode: "+1",
    };
  },
  props: {
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
  setup(props) {
    // phone dialCode
    const phoneCodes = CountryPhoneCodes.map((_c) => {
      return {
        value: _c.dialCode,
        //label: `(${_c.dialCode}) ${_c.countryCode}`,
        label: `${_c.dialCode}`,
      };
    });

    //filter
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const suffixIcon = h(ArrowIcon);

    const setCleave = async (dialCode) => {
      const country = CountryPhoneCodes.find((_c) => _c.dialCode === dialCode);
      await require(`cleave.js/dist/addons/cleave-phone.${country.countryCode.toLowerCase()}`);

      new Cleave(".ant-input", {
        phone: true,
        phoneRegionCode: country.countryCode.toLowerCase(),
      });
    };

    return {
      phoneCodes,
      suffixIcon,
      filterOption,
      setCleave,
    };
  },
  mounted() {
    this.setCleave(this.dialCode);
  },
};
</script>
