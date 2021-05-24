<template></template>

<script>
import Notification from "ant-design-vue/lib/notification";
import Button from "ant-design-vue/lib/button";
import MHIcon from "@meetinghand/style/icons/index";
import StatusSuccess from "@meetinghand/style/icons/systemStatusSuccess";
import StatusError from "@meetinghand/style/icons/systemStatusError";
import StatusInfo from "@meetinghand/style/icons/systemStatusInfo";
import StatusHint from "@meetinghand/style/icons/systemStatusHint";
import { h } from "vue";

export default {
  name: "MhNotification",
  components: {
    [Notification.name]: Notification,
    [Button.name]: Button,
    "mh-icon": MHIcon,
    "status-success": StatusSuccess,
  },
  props: {
    type: {
      type: String,
      default: "success",
      validator: (_v) => ["success", "error", "info", "hint"].includes(_v),
    },
    description: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    placement: {
      type: String,
      required: true,
      default: "topRight",
      validator: (_v) =>
        ["topRight", "topLeft", "bottomRight", "bottomLeft"].includes(_v),
    },
  },

  setup(props, { emit }) {
    const openNotification = () => {
      const icons = {
        success: StatusSuccess,
        error: StatusError,
        info: StatusInfo,
        hint: StatusHint,
      };

      Notification.open({
        message: `${props.title}`,
        description: `${props.description}`,
        duration: Number(`${props.duration}`),
        class: `${props.type}`,
        icon: h(icons[props.type]),
        placement: `${props.placement}`,
        onClose: () => {
          emit("update:modelValue", false);
        },
      });
    };

    return {
      openNotification,
    };
  },
  created() {
    this.openNotification();
  },
};

// icon: h(`${props.icon}`),
</script>

<style scoped>
</style>

