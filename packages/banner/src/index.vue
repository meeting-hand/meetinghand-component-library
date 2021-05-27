<template>
  <div>
    <component :is="type" :button="button" :text="text" :bannerType="bannerType"
      ><slot></slot
    ></component>
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
      required: true,
    },
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
  },
};
</script>