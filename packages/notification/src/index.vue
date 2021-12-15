<template></template>
<script>
import Notification from "ant-design-vue/lib/notification";
import Button from "@meetinghand/button";

import StatusError from "@meetinghand/style/icons/systemStatusError.vue";
import StatusInfo from "@meetinghand/style/icons/systemStatusInfo.vue";
import StatusHint from "@meetinghand/style/icons/systemStatusHint.vue";
import SystemClose from "@meetinghand/style/icons/systemClose.vue";
import SystemStatusSuccess from "@meetinghand/style/icons/systemStatusSuccess.vue";

import { h, onBeforeUnmount, onMounted } from "vue";

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
    message: {
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
        success: SystemStatusSuccess,
        error: StatusError,
        info: StatusInfo,
        hint: StatusHint,
      };

      Notification.open({
        description: props.description,
        message: props.message,
        duration: props.duration,
        class: [props.type, { title: props.message }],
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
            type: "text",
            onClick: () => {
              Notification.close(key);
              emit("close", true);
            },
          },
          () => "Close"
        ),
      });
    };

    onMounted(async () => {
      openNotification();
    });

    onBeforeUnmount(() => {
      Notification.close(key);
    });

    return {
      openNotification,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
