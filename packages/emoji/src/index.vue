<template>
  <div class="mh-emoji">
    <a-popover
      placement="left"
      trigger="click"
      class="dsada"
      v-model:visible="visible"
    >
      <template #content>
        <div class="list-emoji-wrapper">
          <slot></slot>
        </div>
      </template>
      <mh-button
        type="iconic"
        :icon="visible ? 'system-close' : 'ui-emoji-add'"
        size="small"
        circular
      />
    </a-popover>
  </div>
</template>

<script>
import { Popover } from "ant-design-vue";
import MhButton from "@meetinghand/button";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default {
  name: "Emoji",
  components: {
    [Popover.name]: Popover,
    MhButton,
    MhIcon,
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
