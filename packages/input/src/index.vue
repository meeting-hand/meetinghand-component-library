<template>
  <a-input
    :placeholder="placeholder"
    :class="[{ error: hasError }]"
    :disabled="disabled"
  >
    <template #prefix v-if="leftIcon">
      <mh-icon :name="leftIcon" />
    </template>
    <template #suffix v-if="rightIcon">
      <mh-icon :name="rightIcon" />
    </template>
  </a-input>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import Input from "ant-design-vue/lib/input";
import MhIcon from "@meetinghand/style/icons/index";
export default {
  name: "MhInput",
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
  },
  components: {
    [Input.name]: Input,
    MhIcon,
  },
};
</script>

<style scoped>
</style>
