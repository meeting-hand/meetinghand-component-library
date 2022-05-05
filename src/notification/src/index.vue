<template></template>
<script lang="ts">
import { h, onBeforeUnmount, onMounted, defineComponent } from "vue";

import Notification from "ant-design-vue/es/notification";

import Button from "../../button";
import MhIcon from "../../style/icons";

export default defineComponent({
  name: "MhNotification",
  props: {
    type: {
      type: String,
      default: "success",
      validator: (_v: string) =>
        ["success", "error", "info", "hint"].includes(_v),
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
      validator: (_v: string) =>
        ["topRight", "topLeft", "bottomRight", "bottomLeft"].includes(_v),
    },
  },

  setup(props, { emit }) {
    const key = Math.random().toString(36).substr(2, 9);

    const openNotification = () => {
      const icons: any = {
        success: "system-status-success",
        error: "system-status-error",
        info: "system-status-info",
        hint: "system-status-hint",
      };

      Notification.open({
        description: props.description,
        message: props.message,
        duration: props.duration,
        class: [props.type, { title: props.message }],
        icon: h(MhIcon, { name: icons[props.type] }),
        placement: props.placement,
        key: key,
        onClose: () => {
          emit("close", true);
        },
        closeIcon: h(MhIcon, { name: "system-close" }),
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
});
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
