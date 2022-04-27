<template>
  <a-input
    :placeholder="placeholder"
    :class="[{ error: errorStatus, 'allow-clear': allowClear }]"
    :disabled="disabled"
    :allow-clear="allowClear"
    :type="inputType"
    :autocomplete="autocomplete"
    :id="id"
    :maxlength="maxLength"
    v-cleave="mask"
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

<script lang="ts">
import { Input } from "ant-design-vue";

import inputProps from "../utils/props";
import Cleave from "cleave.js";

import MhIcon from "../../../style/icons";

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MhInputDefault",
  props: inputProps,
  components: {
    [Input.name]: Input,
    MhIcon,
  },
  directives: {
    cleave: {
      beforeMount: (el: any, binding: any) => {
        if (!binding.value) return;
        el.cleave = new Cleave(el, binding.value || {});
      },
      updated: (el: any) => {
        if (!el.cleave) return;
        const event = new Event("input", { bubbles: true });
        setTimeout(function () {
          el.value = el.cleave.properties.result;
          el.dispatchEvent(event);
        }, 100);
      },
    },
  },
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data: string) {
        //Text Transform
        if (props.textTransform === "capitalize") {
          data = data
            .split(" ")
            .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
            .join(" ");
        } else if (props.textTransform === "uppercase") {
          data = data.toUpperCase();
        }

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
});
</script>
