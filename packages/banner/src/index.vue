<template>
  <div class="mh-banner">
    <component
      :is="type"
      :button="button"
      :text="text"
      :bannerType="bannerType"
      :customText="customText"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
import Banner from "ant-design-vue/lib/alert";

import Section from "./types/section";
import FullWidth from "./types/fullWidth";

export default {
  name: "Banner",
  components: {
    [Banner.name]: Banner,
    Section,
    FullWidth,
  },
  props: {
    type: {
      type: String,
      default: "section",
      validator: (_v) => ["section", "fullWidth"].includes(_v),
    },
    button: {
      type: String,
      default: null,
      validator: (_v) => [null, "custom", "close"].includes(_v),
    },
    text: {
      type: String,
      default: "",
    },
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
    customText: {
      type: String,
      default: null,
    },
  },
};
</script>
