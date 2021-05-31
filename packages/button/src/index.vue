<template>
  <component
    :is="type"
    :size="size"
    :icon="icon"
    :iconAlignment="iconAlignment"
    :disabled="disabled"
    :wait="wait"
    :socialMedia="socialMedia"
  >
    <slot></slot>
  </component>
</template>

<script>
import Button from "ant-design-vue/lib/button";

import Primary from "./types/primary.vue";
import Secondary from "./types/secondary.vue";
import Small from "./types/small.vue";
import Text from "./types/text.vue";
import Row from "./types/row.vue";
import Iconic from "./types/iconic.vue";
import Social from "./types/social.vue";

export default {
  name: "MhButton",
  components: {
    [Button.name]: Button,
    Primary,
    Secondary,
    Small,
    Text,
    Row,
    Iconic,
    Social,
  },
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (_v) =>
        [
          "primary",
          "secondary",
          "small",
          "text",
          "row",
          "iconic",
          "social",
        ].includes(_v),
    },
    size: {
      type: String,
      default: "default",
      validator: (_v) =>
        ["default", "large", "normal", "circular", "small", "tiny"].includes(
          _v
        ),
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
    socialMedia: {
      type: String,
      default: null,
      validator: (_v) => ["google", "facebook", "linkedin"].includes(_v),
    },
  },
};
</script>
