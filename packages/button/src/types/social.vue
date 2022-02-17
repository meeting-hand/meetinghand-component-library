<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[`${socialMedia}`, `mh-social-button`, `mh-button`]"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
  </button>
</template>

<script>
import MHIcon from "@meetinghand/style/icons/index.vue";

export default {
  name: "MhButtonSocial",
  components: {
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
