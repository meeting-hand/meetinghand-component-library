<template>
  <a-input
    :placeholder="placeholder"
    :class="[{ error: errorStatus }, 'mh-tel-input', { disabled: disabled }]"
    :disabled="disabled"
    ref="telInput"
    :id="id"
    :defaultValue="defaultValue"
    @change="inputChanged"
    v-if="loaded"
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
import { Input, Select } from "ant-design-vue";

import ArrowIcon from "@meetinghand/style/icons/chevronDown.vue";

import Cleave from "cleave.js";

import { h, ref, onMounted, computed } from "vue";

import inputProps from "../utils/props";

import "@meetinghand/style/lib/scss/ant/select.scss";

export default {
  name: "MhInputTel",
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
  },
  props: inputProps,
  setup(props, { emit }) {
    const loaded = ref(false);
    const phoneCodes = ref([]);
    const countryPhoneCodes = ref([]);

    const dialCode = ref("+1");
    let cleave;

    const loadPhoneCodes = async () => {
      try {
        const response = await fetch(
          "https://meetinghand.s3.eu-central-1.amazonaws.com/assets/resources/countryPhoneCodes.json"
        );

        countryPhoneCodes.value = await response.json();

        phoneCodes.value = countryPhoneCodes.value.map((_c) => {
          return {
            value: _c.dialCode,
            label: `${_c.dialCode}`,
          };
        });
      } catch (error) {
        console.log(error);
      }

      loaded.value = true;
    };

    const includeFile = (url) => {
      return new Promise((resolve) => {
        var head = document.head;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onreadystatechange = () => resolve(true);
        script.onload = () => resolve(true);
        head.appendChild(script);
      });
    };

    //filter
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const suffixIcon = h(ArrowIcon);

    const setCleave = async (dialCode) => {
      const country = countryPhoneCodes.value.find(
        (_c) => _c.dialCode === dialCode
      );

      if (!country) return;

      await includeFile(
        `https://meetinghand.s3.eu-central-1.amazonaws.com/assets/resources/cleave-country-formats/cleave-phone.${country.countryCode.toLowerCase()}.js`
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

    onMounted(async () => {
      await loadPhoneCodes();

      if (valueDialCode.value) {
        dialCode.value = valueDialCode.value;
      }

      setCleave(dialCode.value);
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
      loaded,
    };
  },
};
</script>
