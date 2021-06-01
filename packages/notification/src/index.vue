<template></template>

<script>
import Notification from "ant-design-vue/lib/notification";
import MHIcon from "@meetinghand/style/icons/index.vue";
import StatusSuccess from "@meetinghand/style/icons/systemStatusSuccess.vue";
import StatusError from "@meetinghand/style/icons/systemStatusError.vue";
import StatusInfo from "@meetinghand/style/icons/systemStatusInfo.vue";
import StatusHint from "@meetinghand/style/icons/systemStatusHint.vue";
import SystemClose from "@meetinghand/style/icons/systemClose.vue";
import { h } from "vue";

export default {
  name: "MhNotification",
  components: {
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
      type: Number,
    },
    placement: {
      type: String,
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
        closeIcon: h(SystemClose),
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
</script>

<style scoped>
</style>

