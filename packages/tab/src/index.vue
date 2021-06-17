<template>
  <a-tabs v-model:activeKey="activeKey" :class="type">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render
      >Content of Tab Pane 2</a-tab-pane
    >
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script>
import { ref } from "vue";
import { Tabs } from "ant-design-vue";

export default {
  name: "MhTab",
  components: {
    [Tabs.name]: Tabs,
    "a-tab-pane": Tabs.TabPane,
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "rounded"].includes(_v),
    },
  },
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
