<template>
  <a-tabs v-model:activeKey="activeKey" :class="color">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render
      >Content of Tab Pane 2</a-tab-pane
    >
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script>
import Tab from "ant-design-vue/lib/tabs";
import "ant-design-vue/lib/tabs/style/index.less";
import "./assets/main.scss";

import { ref } from "vue";

export default {
  name: "MhTab",
  components: {
    [Tab.name]: Tab,
    "a-tab-pane": Tab.TabPane,
  },
  props: {
    color: {
      type: String,
      default: "blue",
      validator: (_v) => ["blue", "black"].includes(_v),
    },
  },
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
};
</script>

<style scoped>
</style>
