<template>
  <div :class="[`section-banner`, sectionType]">
    <div class="banner-content">
      <mh-icon name="system-status-info" v-if="sectionType === 'info'" />
      <mh-icon name="system-status-success" v-if="sectionType === 'success'" />
      <mh-icon name="system-status-hint" v-if="sectionType === 'warning'" />
      <mh-icon name="system-status-error" v-if="sectionType === 'error'" />
      <div class="banner-text">
        <p v-if="title">{{ title }}</p>
        <span>{{ message }}</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import MhIcon from "@meetinghand/style/icons/index.vue";
import MhButton from "@meetinghand/button";

export default {
  components: {
    MhIcon,
    MhButton,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    buttonText: {
      type: String,
      default: null,
    },
    sectionType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success", "info", "error"].includes(_v),
    },
  },
  setup() {},
};
</script>
