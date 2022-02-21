<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="[
      `mh-tab-button`,
      `mh-button`,
      { disabled: disabled },
      { active: isActive },
    ]"
    :disabled="disabled"
  >
    <mh-icon :name="icon" v-if="icon" />
    <slot></slot>
  </button>
</template>

<script>
import MHIcon from "@meetinghand/style/icons/index.vue";

export default {
  name: "MhButtonTab",
  components: {
    "mh-icon": MHIcon,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>
