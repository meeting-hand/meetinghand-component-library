<template>
  <a-switch v-model:checked="value" :disabled="disabled" />
</template>

<script>
import { Switch } from "ant-design-vue";
import "./assets/main.scss";

export default {
  name: "MhSwitch",
  components: {
    [Switch.name]: Switch,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(data) {
        this.$emit("update:modelValue", data);
      },
    },
  },
};
</script>
