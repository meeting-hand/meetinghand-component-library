<template>
  <component
    :is="type"
    :size="size"
    :icon="icon"
    :iconAlignment="iconAlignment"
    :disabled="disabled"
    :wait="wait"
  >
    <slot></slot>
  </component>
</template>

<script>
import Button from "ant-design-vue/lib/button";

import Primary from "./types/primary";
import Secondary from "./types/secondary";
import Small from "./types/small";
import Text from "./types/text";
import Row from "./types/row";

export default {
  name: "MhButton",
  components: {
    [Button.name]: Button,
    Primary,
    Secondary,
    Small,
    Text,
    Row,
  },
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (_v) =>
        ["primary", "secondary", "small", "text", "row"].includes(_v),
    },
    size: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "large"].includes(_v),
    },
    icon: {
      type: String,
      default: null,
    },
    iconAlignment: {
      type: String,
      default: "left",
      validator: (_v) => ["left", "right"].includes(_v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    wait: {
      type: Boolean,
      default: false,
    },
  },
};
</script>