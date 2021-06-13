<template></template>
<script>
import Notification from "ant-design-vue/lib/notification";

import "ant-design-vue/lib/notification/style/index.less";
import "./assets/main.scss";

import StatusSuccess from "@meetinghand/style/icons/systemStatusSuccess.vue";
import StatusError from "@meetinghand/style/icons/systemStatusError.vue";
import StatusInfo from "@meetinghand/style/icons/systemStatusInfo.vue";
import StatusHint from "@meetinghand/style/icons/systemStatusHint.vue";
import SystemClose from "@meetinghand/style/icons/systemClose.vue";

import { h, onBeforeUnmount } from "vue";

export default {
  name: "MhNotification",
  props: {
    type: {
      type: String,
      default: "success",
      validator: (_v) => ["success", "error", "info", "hint"].includes(_v),
    },
    description: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 3,
    },
    placement: {
      type: String,
      default: "bottomRight",
      validator: (_v) =>
        ["topRight", "topLeft", "bottomRight", "bottomLeft"].includes(_v),
    },
  },

  setup(props, { emit }) {
    const key = Math.random().toString(36).substr(2, 9);

    const openNotification = () => {
      const icons = {
        success: StatusSuccess,
        error: StatusError,
        info: StatusInfo,
        hint: StatusHint,
      };

      Notification.open({
        message: props.title,
        description: props.description,
        duration: props.duration,
        class: props.type,
        icon: h(icons[props.type]),
        placement: props.placement,
        key: key,
        onClose: () => {
          emit("close", true);
        },
        closeIcon: h(SystemClose),
      });
    };

    onBeforeUnmount(() => {
      Notification.close(key);
    });

    return {
      openNotification,
    };
  },
  created() {
    this.openNotification();
  },
};
</script>
