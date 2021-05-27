<template>
  <a-button type="default" :class="[`${socialMedia}`, `social-btn`]">
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
  </a-button>
</template>
<script>
import Button from "ant-design-vue/lib/button";
import MHIcon from "@meetinghand/style/icons/index";
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
        ["social-google", "social-facebook", "social-linkedin"].includes(_v),
    },
    socialMedia: {
      type: String,
      default: "google",
      validator: (_v) => ["google", "facebook", "linkedin"].includes(_v),
    },
  },
};
</script>
