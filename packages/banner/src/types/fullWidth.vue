<template>
  <div :class="[`full-width-banner`, bannerType]">
    <div class="full-width-banner-container">
      <div class="banner-left">
        <div class="banner-icon">
          <mh-icon name="system-status-error" v-if="icon === 'warning'" />
          <mh-icon name="system-status-success" v-if="icon === 'success'" />
          <mh-icon name="system-status-hint" v-if="icon === 'hint'" />
          <mh-icon name="ui-gift" v-if="icon === 'gift'" />
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
  </div>
</template>
<script>
import MHIcon from "@meetinghand/style/icons/index.vue";
import MhButton from "../../../button/index";

export default {
  components: {
    "mh-icon": MHIcon,
    MhButton,
  },
  props: {
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success", "info"].includes(_v),
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  setup() {
    return {};
  },
};
</script>
