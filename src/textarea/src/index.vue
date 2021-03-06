<template>
  <div class="mh-text-area">
    <div v-if="title" class="mh-text-area-label">
      <span class="mh-text-area-title">{{ title }}</span>
      <tooltip v-if="tooltip" size="large" placement="top" :text="tooltip">
        <img src="./assets/icons/system-info.svg" alt="" />
      </tooltip>
    </div>
    <textarea
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :class="[{ error: errorStatus }, { disabled: disabled }]"
    />
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Tooltip from "../../tooltip";

export default defineComponent({
  name: "MhTextArea",
  components: {
    Tooltip,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    rows: {
      type: Number,
      default: 5,
    },
    tooltip: {
      type: String,
      default: null,
    },
  },
  computed: {
    errorStatus: function (props: any) {
      return props.hasError || props.errorMessage;
    },
    value: {
      get() {
        return this.modelValue;
      },
      set(data: string) {
        this.$emit("update:modelValue", data);
      },
    },
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
