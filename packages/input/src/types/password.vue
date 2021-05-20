<template>
  <a-input-password
    :placeholder="placeholder"
    :class="[{ error: hasError }]"
    :disabled="disabled"
  >
    <!-- <template #addonAfter>
      <mh-icon name="system-show" />
      <mh-icon name="system-hide" />
    </template> -->
  </a-input-password>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import Input from "ant-design-vue/lib/input/Password";
import MhIcon from "@meetinghand/style/icons/index";

export default {
  name: "MhInputPassword",
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
  components: {
    [Input.name]: Input,
    MhIcon,
  },
};
</script>
