<template>
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    v-if="`${button}` === 'null'"
    :icon="infoIcon"
  />
  <!-- Event trigger will be added -->
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    closable
    :closeText="`${customText}`"
    v-if="`${button}` === 'custom'"
    :icon="infoIcon"
  />
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    closable
    v-if="`${button}` === 'close'"
    :icon="infoIcon"
  />
</template>
<script>
import Banner from "ant-design-vue/lib/alert";
import SystemInfo from "@meetinghand/style/icons/systemStatusInfo";

import { h } from "vue";

export default {
  components: {
    [Banner.name]: Banner,
  },
  props: {
    button: {
      type: String,
      default: null,
      validator: (_v) => [null, "custom", "close"].includes(_v),
    },
    text: {
      type: String,
      required: true,
    },
    customText: {
      type: String,
      default: "Button",
    },
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
  },
  setup() {
    const infoIcon = h(SystemInfo);
    return {
      infoIcon,
    };
  },
};
</script>
<style scoped>
svg {
  fill: #000;
  min-width: 20px;
}
</style>
