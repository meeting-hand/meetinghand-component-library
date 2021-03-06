<template>
  <div :class="['mh-input', className]">
    <div class="mh-input-label" v-if="label">
      <label :for="elId">
        {{ label }}
      </label>
      <tooltip v-if="tooltip" size="large" placement="top" :text="tooltip">
        <mh-icon name="system-info" />
      </tooltip>
    </div>

    <component
      :is="inputType"
      :hasError="hasError"
      :errorMessage="errorMessage"
      :disabled="disabled"
      :placeholder="placeholder"
      :leftIcon="leftIcon"
      :rightIcon="rightIcon"
      :allowClear="allowClear"
      :textTransform="textTransform"
      :email="email"
      :autocomplete="autocomplete"
      :maxLength="maxLength"
      :mask="mask"
      :countryCode="countryCode"
      :id="elId"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import Default from "./types/default.vue";
import Password from "./types/password.vue";
import Tel from "./types/tel.vue";
import Tooltip from "../../tooltip";
import MhIcon from "../../style/icons";
import props from "./utils/props";

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MhInput",
  components: {
    Default,
    Password,
    Tel,
    Tooltip,
    MhIcon,
  },
  props: {
    ...props,
    inputType: {
      type: String,
      default: "default",
      validator: (_v: string) => ["default", "tel", "password"].includes(_v),
    },
    label: {
      type: String,
      default: null,
    },
    tooltip: {
      type: String,
      default: null,
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

    const className = props.class;

    const elId = props.id
      ? props.id
      : "_" + Math.random().toString(36).substr(2, 9);

    return {
      value,
      elId,
      className,
    };
  },
});
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
