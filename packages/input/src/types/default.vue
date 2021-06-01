<template>
  <div class="mh-input">
    <a-input
      :placeholder="placeholder"
      :class="[{ error: errorStatus, 'allow-clear': allowClear }]"
      :disabled="disabled"
      :allow-clear="allowClear"
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
  </div>
</template>

<script>
import Input from "ant-design-vue/lib/input";
import MhIcon from "@meetinghand/style/icons/index.vue";
import { computed } from "vue";
export default {
  name: "MhInputDefault",
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
