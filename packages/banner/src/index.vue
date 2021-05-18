<template>
  <component :is="type" :button="button"><slot></slot></component>
</template>

<script>
import Banner from "ant-design-vue/lib/alert";

import Section from "./types/section";
import FullWidth from "./types/fullWidth";

if (process.env.NODE_ENV === "development") {
  import("ant-design-vue/dist/antd.css");
}

export default {
  name: "Banner",
  components: {
    Banner,
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
  },
};
</script>
