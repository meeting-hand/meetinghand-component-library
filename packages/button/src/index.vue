<template>
  <component
    :is="type"
    :size="size"
    :icon="icon"
    :iconAlignment="iconAlignment"
    :disabled="disabled"
    :wait="wait"
    :socialMedia="socialMedia"
    :submit="submit"
    :color="color"
    :iconColor="iconColor"
    :circular="circular"
  >
    <slot></slot>
  </component>
</template>

<script>
import Primary from "./types/primary.vue";
import Secondary from "./types/secondary.vue";
import Small from "./types/small.vue";
import Text from "./types/text.vue";
import Row from "./types/row.vue";
import Iconic from "./types/iconic.vue";
import Social from "./types/social.vue";
import Menu from "./types/menu.vue";
import List from "./types/list.vue";
import Tab from "./types/tab.vue";

export default {
  name: "MhButton",
  components: {
    Primary,
    Secondary,
    Small,
    Text,
    Row,
    Iconic,
    Social,
    Menu,
    List,
    Tab,
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
          "menu",
          "list",
          "tab",
        ].includes(_v),
    },
    size: {
      type: String,
      default: "default",
      validator: (_v) =>
        ["default", "large", "normal", "small", "tiny"].includes(_v),
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
      validator: (_v) => ["google", "facebook", "apple"].includes(_v),
    },
    submit: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
      validator: (_v) => ["blue", "green", "red"].includes(_v),
    },
    iconColor: {
      type: String,
      default: null,
      validator: (_v) => ["red"].includes(_v),
    },
    circular: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
