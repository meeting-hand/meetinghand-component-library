<template>
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    v-if="`${button}` === 'null'"
  />
  <!-- Event trigger will be added -->
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    closable
    :closeText="`${customText}`"
    v-if="`${button}` === 'custom'"
  />
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    closable
    v-if="`${button}` === 'close'"
  />
</template>
<script>
import Banner from "ant-design-vue/lib/alert";

export default {
  components: {
    [Banner.name]: Banner,
  },
  props: {
    button: {
      type: String,
      default: null,
      validator: (_v) => [null, "custom", "close"].includes(_v),
    },
    text: {
      type: String,
      required: true,
    },
    customText: {
      type: String,
      default: "Button",
    },
  },
};
</script>
<style scoped>
</style>
