<template>
  <a-input-password
    :placeholder="placeholder"
    :class="[{ error: errorStatus }]"
    :disabled="disabled"
    :id="id"
    :autocomplete="autocomplete"
    v-model:value="value"
  >
  </a-input-password>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script lang="ts">
import { Input } from "ant-design-vue";
import MhIcon from "../../../style/icons";

import inputProps from "../utils/props";

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MhInputPassword",
  props: inputProps,
  components: {
    [Input.Password.name]: Input.Password,
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
});
</script>
