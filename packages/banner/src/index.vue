<template>
  <div class="mh-banner">
    <component
      :is="type"
      :bannerType="bannerType"
      :title="title"
      :icon="icon"
      :message="message"
      :sectionType="sectionType"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
import props from "./utils/props";

import Section from "./types/section.vue";
import FullWidth from "./types/fullWidth.vue";

export default {
  name: "MhBanner",
  components: {
    Section,
    FullWidth,
  },
  props: {
    ...props,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
