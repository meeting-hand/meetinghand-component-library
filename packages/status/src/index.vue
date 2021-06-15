<template>
  <div :class="['mh-status', { disabled: disabled }, color]">
    <div class="mh-status-container">
      <mh-icon v-if="icon" :name="icon" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import MHIcon from "@meetinghand/style/icons/index.vue";
import "./assets/main.scss";

export default {
  name: "Status",
  components: {
    "mh-icon": MHIcon,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
      validator: (_v) => ["green", "yellow", "red"].includes(_v),
    },
    message: {
      type: String,
      default: "",
    },
  },
  setup() {
    // your code
  },
};
</script>

<style scoped>
</style>
