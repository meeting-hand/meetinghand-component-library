<template>
  <div class="mh-input">
    <a-input-password
      :placeholder="placeholder"
      :class="[{ error: errorStatus }]"
      :disabled="disabled"
      v-model:value="value"
    >
      <!-- <template #addonAfter>
      <mh-icon name="system-show" />
      <mh-icon name="system-hide" />
    </template> -->
    </a-input-password>
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
import Input from "ant-design-vue/lib/input/Password";
import MhIcon from "@meetinghand/style/icons/index.vue";

import inputProps from "../utils/props";

import { computed } from "vue";

export default {
  name: "MhInputPassword",
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

    return {
      value,
      errorStatus,
    };
  },
};
</script>
