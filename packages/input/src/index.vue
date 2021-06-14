<template>
  <component
    :is="inputType"
    :hasError="hasError"
    :errorMessage="errorMessage"
    :disabled="disabled"
    :placeholder="placeholder"
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
    :allowClear="allowClear"
    :email="email"
    :id="elId"
    v-model="value"
  />
</template>

<script>
//import "ant-design-vue/lib/input/style/index.less";
import "./assets/scss/main.scss";

import Default from "./types/default.vue";
import Password from "./types/password.vue";
import Tel from "./types/tel.vue";

import props from "./utils/props";

import { computed } from "vue";

export default {
  name: "MhInput",
  components: {
    Default,
    Password,
    Tel,
  },
  props: {
    ...props,
    inputType: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "tel", "password"].includes(_v),
    },
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

    const elId = props.id
      ? props.id
      : "_" + Math.random().toString(36).substr(2, 9);

    return {
      value,
      elId,
    };
  },
};
</script>
