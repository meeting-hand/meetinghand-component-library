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

<script lang="ts">
import { defineComponent } from "vue";

import Primary from "./types/primary.vue";
import Secondary from "./types/secondary.vue";
import Text from "./types/text.vue";
import Iconic from "./types/iconic.vue";
import Social from "./types/social.vue";
import Menu from "./types/menu.vue";
import List from "./types/list.vue";
import Tab from "./types/tab.vue";
import TabBar from "./types/tabBar.vue";

export default defineComponent({
  name: "MhButton",
  components: {
    Primary,
    Secondary,
    Text,
    Iconic,
    Social,
    Menu,
    List,
    Tab,
    TabBar,
  },
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (_v: string) =>
        [
          "primary",
          "secondary",
          "text",
          "iconic",
          "social",
          "menu",
          "list",
          "tab",
          "tabBar",
        ].includes(_v),
    },
    size: {
      type: String,
      default: "default",
      validator: (_v: string) =>
        ["default", "large", "normal", "small", "tiny", "text"].includes(_v),
    },
    icon: {
      type: String,
      default: null,
    },
    iconAlignment: {
      type: String,
      default: "left",
      validator: (_v: string) => ["left", "right"].includes(_v),
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
      validator: (_v: string) => ["google", "facebook", "apple"].includes(_v),
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
    iconColor: {
      type: String,
      default: null,
      validator: (_v: string) => ["red"].includes(_v),
    },
    circular: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
});
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
