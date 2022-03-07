<template>
  <label
    v-if="type === 'default'"
    :for="id"
    :class="['mh-radio', { 'mh-radio-disabled': disabled }]"
  >
    <input
      type="radio"
      name="radio"
      class="mh-radio-inner"
      :id="id"
      :disabled="disabled"
      :checked="radioField"
      v-model="radioField"
    />
    {{ text }}
    <slot></slot>
  </label>
  <mh-button
    @click="set()"
    :class="[
      'mh-button-radio',
      { 'mh-button-radio-selected': data === modelValue },
      { 'mh-button-radio-disabled': disabled },
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
import { defineComponent, computed } from "vue";

import MhButton from "@meetinghand/button/src/index.vue";

import "./assets/main.scss";

export default defineComponent({
  components: {
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
  setup(props, { emit }) {
    const radioField = computed({
      get() {
        return props.modelValue === props.data;
      },
      set() {
        emit("update:modelValue", props.data);
      },
    });

    const set = () => {
      if (props.disabled) return;
      emit("update:modelValue", props.data);
    };

    return {
      radioField,
      set,
    };
  },
});
</script>
