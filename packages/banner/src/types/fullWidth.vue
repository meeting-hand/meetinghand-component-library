<template>
  <a-alert
    type="warning"
    :show-icon="false"
    :message="`${text}`"
    banner
    v-if="`${bannerType}` === 'warning'"
  />
  <a-alert
    type="success"
    :show-icon="false"
    :message="`${text}`"
    banner
    v-if="`${bannerType}` === 'success'"
  />
</template>
<script>
import Banner from "ant-design-vue/lib/alert";

export default {
  components: {
    [Banner.name]: Banner,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
    button: {
      type: String,
      default: null,
      validator: (_v) => [null, "custom", "close"].includes(_v),
    },
  },
};
</script>
<style scoped>
</style>
