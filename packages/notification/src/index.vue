<template></template>
<script>
import Notification from "ant-design-vue/lib/notification";
import Button from "@meetinghand/button/src/index.vue";

import "./assets/main.scss";

import StatusError from "@meetinghand/style/icons/systemStatusError.vue";
import StatusInfo from "@meetinghand/style/icons/systemStatusInfo.vue";
import StatusHint from "@meetinghand/style/icons/systemStatusHint.vue";
import SystemClose from "@meetinghand/style/icons/systemClose.vue";
import UiCheck from "@meetinghand/style/icons/uiCheck.vue";

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
    duration: {
      type: Number,
      default: 3,
    },
    placement: {
      type: String,
      default: "topRight",
      validator: (_v) =>
        ["topRight", "topLeft", "bottomRight", "bottomLeft"].includes(_v),
    },
  },

  setup(props, { emit }) {
    const key = Math.random().toString(36).substr(2, 9);

    const openNotification = () => {
      const icons = {
        success: UiCheck,
        error: StatusError,
        info: StatusInfo,
        hint: StatusHint,
      };

      Notification.open({
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
        btn: h(
          Button,
          {
            type: "secondary",
            onClick: () => {
              Notification.close(key);
              emit("close", true);
            },
          },
          () => "Dismiss"
        ),
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
