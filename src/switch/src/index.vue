<template>
  <a-switch v-model:checked="value" :disabled="disabled" />
</template>

<script lang="ts">
import Switch from "ant-design-vue/es/switch";
import { defineComponent } from "vue";

export default defineComponent({
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
      get(): boolean {
        return this.modelValue;
      },
      set(data: boolean) {
        this.$emit("update:modelValue", data);
      },
    },
  },
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
