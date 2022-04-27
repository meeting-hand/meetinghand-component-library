<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[
      `mh-iconic-button`,
      `mh-button`,
      `size-${size}`,
      { 'iconic-circular': circular },
      { wait: wait },
      { disabled: disabled },
      color,
    ]"
    :disabled="disabled || wait"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot v-if="!wait"></slot>
    <mh-icon name="wait" class="wait-spinner" v-if="wait" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MHIcon from "../../../style/icons";

export default defineComponent({
  name: "MhButtonRow",
  components: {
    "mh-icon": MHIcon,
  },
  props: {
    size: {
      type: String,
      default: "default",
      validator: (_v: string) =>
        ["default", "circular", "small", "tiny", "text"].includes(_v),
    },
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
      validator: (_v: string) => ["blue", "green", "red"].includes(_v),
    },
    wait: {
      type: Boolean,
      default: false,
    },
    circular: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
