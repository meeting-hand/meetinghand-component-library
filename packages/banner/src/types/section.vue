<template>
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    v-if="`${button}` === 'null'"
  />
  <a-alert
    :message="`${text}`"
    type="info"
    show-icon
    closable
    closeText="button"
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
  },
};
</script>
<style scoped>
</style>
