<template>
  <a-input
    :placeholder="placeholder"
    :class="[{ error: hasError }]"
    :disabled="disabled"
  >
    <template #addonBefore>
      <!-- <a-select v-model:value="prefix" style="width: 90px">
        <a-select-option value="Http://">Http://</a-select-option>
        <a-select-option value="Https://">Https://</a-select-option>
      </a-select> -->
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
      prefix: null,
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
};
</script>
