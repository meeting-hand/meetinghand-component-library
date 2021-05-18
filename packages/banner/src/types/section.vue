<template>
  <div v-if="`${button}` === 'null'">
    <h1>test111</h1>
  </div>
  <div v-if="`${button}` === 'custom'">
    <h1>test222</h1>
  </div>
  <div v-if="`${button}` === 'close'">
    <h1>test333</h1>
  </div>
</template>
<script>
import Banner from "ant-design-vue/lib/alert";

export default {
  components: {
    Banner,
  },
  props: {
    button: {
      type: String,
      default: null,
      validator: (_v) => [null, "custom", "close"].includes(_v),
    },
  },
};
</script>
<style scoped>
div {
  background-color: green;
}
</style>
