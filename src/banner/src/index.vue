<template>
  <div class="mh-banner">
    <component
      :is="type"
      :bannerType="bannerType"
      :title="title"
      :message="message"
      :sectionType="sectionType"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import props from "./utils/props";

import Section from "./types/section.vue";
import FullWidth from "./types/fullWidth.vue";

export default defineComponent({
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
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
