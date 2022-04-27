<template>
  <div :class="[`section-banner`, sectionType]">
    <div class="banner-content">
      <mh-icon :name="'system-status-' + sectionType" />
      <div class="banner-text">
        <p v-if="title">{{ title }}</p>
        <span>{{ message }}</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MhIcon from "../../../style/icons";

export default defineComponent({
  components: {
    MhIcon,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    sectionType: {
      type: String,
      default: "hint",
      validator: (_v: string) =>
        ["hint", "success", "info", "error"].includes(_v),
    },
  },
  setup() {
    return {};
  },
});
</script>

