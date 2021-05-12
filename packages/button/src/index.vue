<template>
  <a-button style="min-width: 200px; min-height: 300px">
    <slot></slot>
  </a-button>
  <a-button type="primary" ghost>Primary</a-button>
    <a-button ghost>Default</a-button>
    <a-button type="dashed" ghost>Dashed</a-button>
    <a-button type="danger" ghost>Danger</a-button>
    <a-button type="link" ghost>Link</a-button>
</template>
<script>
import {Button} from "ant-design-vue";
export default {
  name: "MhButton",
  components: {
    [Button.name]: Button,
  },
  methods: {
    click() {
      console.log('click');
      this.$emit("click");
    },
  },
};
</script>
