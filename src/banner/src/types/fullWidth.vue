<template>
  <div :class="[`full-width-banner`, bannerType]">
    <div class="banner-left">
      <mh-icon
        :name="
          bannerType === 'gift' ? 'ui-gift' : 'system-status-' + bannerType
        "
      />
      <div class="banner-text">
        <div class="banner-text-title">
          {{ title }}
        </div>
        <div class="banner-text-message" v-html="message"></div>
      </div>
    </div>
    <div class="banner-buttons">
      <slot></slot>
    </div>
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
    bannerType: {
      type: String,
      default: "error",
      validator: (_v: string) =>
        ["error", "success", "info", "gift"].includes(_v),
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
