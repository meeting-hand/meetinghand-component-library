<template>
  <div :class="[`full-width-banner`, bannerType]">
    <div class="banner-left">
      <div class="banner-icon">
        <mh-icon
          :name="
            bannerType === 'gift' ? 'ui-gift' : 'system-status-' + bannerType
          "
        />
      </div>
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

<script>
import { defineComponent } from "vue";

import MhIcon from "@meetinghand/style/icons/index.vue";

export default defineComponent({
  components: {
    MhIcon,
  },
  props: {
    bannerType: {
      type: String,
      default: "error",
      validator: (_v) => ["error", "success", "info", "gift"].includes(_v),
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
