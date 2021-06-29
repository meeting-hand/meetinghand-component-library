<template>
  <a-alert
    :message="title"
    :description="text"
    :type="sectionType"
    :closable="closable"
    :closeText="customText"
    showIcon
  >
    <template #icon>
      <mh-icon name="system-status-info" v-if="sectionType === 'info'" />
      <mh-icon name="system-status-success" v-if="sectionType === 'success'" />
      <mh-icon name="system-status-hint" v-if="sectionType === 'warning'" />
      <mh-icon name="system-status-error" v-if="sectionType === 'error'" />
    </template>
  </a-alert>
</template>

<script>
import { Alert } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";

import systemStatusInfo from "@meetinghand/style/icons/systemStatusInfo.vue";
import { h, computed } from "vue";

export default {
  components: {
    [Alert.name]: Alert,
    "mh-icon": MHIcon,
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
    sectionType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success", "info", "error"].includes(_v),
    },
    title: {
      type: String,
    },
  },
  setup(props) {
    const StatusInfo = h(systemStatusInfo);
    // const StatusSuccess = h(StatusSuccess);

    const closable = computed(() => {
      return props.button !== null;
    });

    return {
      closable,
      StatusInfo,
    };
  },
};
</script>
