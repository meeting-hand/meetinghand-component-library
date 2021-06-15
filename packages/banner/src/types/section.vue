<template>
  <a-alert
    :message="text"
    type="info"
    show-icon
    :closable="closable"
    :closeText="customText"
    :icon="infoIcon"
  />
</template>
<script>
import { Alert } from "ant-design-vue";
import SystemInfo from "@meetinghand/style/icons/systemStatusInfo.vue";

import { h, computed } from "vue";

export default {
  components: {
    [Alert.name]: Alert,
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
      default: null,
    },
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
  },
  setup(props) {
    const infoIcon = h(SystemInfo);

    const closable = computed(() => {
      return props.button !== null;
    });

    return {
      infoIcon,
      closable,
    };
  },
};
</script>
