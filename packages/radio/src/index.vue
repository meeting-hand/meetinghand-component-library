<template>
  <a-radio
    :disabled="disabled"
    :id="id"
    v-if="type === 'default'"
    v-model:checked="value"
  >
    {{ text }}
    <slot></slot>
  </a-radio>
  <mh-button
    @click="set()"
    :class="[
      'mh-btn-radio',
      { 'mh-btn-radio-selected': value },
      { 'mh-btn-radio-disabled': disabled },
    ]"
    :disabled="disabled"
    type="secondary"
    v-else
  >
    {{ text }}
  </mh-button>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import { Radio } from "ant-design-vue";
import MhButton from "@meetinghand/button/src/index.vue";
import "./assets/main.scss";

export default {
  name: "MhRadio",
  components: {
    [Radio.name]: Radio,
    MhButton,
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "button"].includes(_v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number, Boolean],
    },
    data: {
      type: [String, Number, Boolean],
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: () => "_" + Math.random().toString(36).substr(2, 9),
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue == this.data;
      },
      set() {
        this.$emit("update:modelValue", this.data);
      },
    },
  },
  methods: {
    set() {
      if (this.disabled) return;
      this.value = this.modelValue;
    },
  },
};
</script>
