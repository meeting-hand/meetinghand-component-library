<template>
  <a-button
    type="default"
    :class="[`${socialMedia}`, `social-btn`]"
    :htmlType="submit ? 'submit' : 'button'"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
  </a-button>
</template>
<script>
import { Button } from "ant-design-vue";
import MHIcon from "@meetinghand/style/icons/index.vue";
export default {
  name: "MhButtonSocial",
  components: {
    [Button.name]: Button,
    "mh-icon": MHIcon,
  },
  props: {
    icon: {
      type: String,
      default: "social-google",
      validator: (_v) =>
        ["social-google", "social-facebook", "social-apple"].includes(_v),
    },
    socialMedia: {
      type: String,
      default: "google",
      validator: (_v) => ["google", "facebook", "apple"].includes(_v),
    },
    submit: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
