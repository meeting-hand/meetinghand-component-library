<template>
  <a-input
    :placeholder="placeholder"
    :class="[{ error: errorStatus, 'allow-clear': allowClear }, 'mh-input']"
    :disabled="disabled"
    :allow-clear="allowClear"
    :type="inputType"
    v-model:value="value"
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
import MhIcon from "@meetinghand/style/icons/index.vue";

import inputProps from "../utils/props";

import { computed } from "vue";

export default {
  name: "MhInputDefault",
  props: inputProps,
  components: {
    [Input.name]: Input,
    MhIcon,
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

    const errorStatus = computed(() => {
      return props.hasError || props.errorMessage;
    });

    const inputType = computed(() => {
      return props.email ? "email" : "text";
    });

    return {
      value,
      errorStatus,
      inputType,
    };
  },
};
</script>
