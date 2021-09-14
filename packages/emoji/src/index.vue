<template>
  <a-popover placement="left" trigger="click" v-model:visible="visibleStatus">
    <template #content>
      <div class="list-emoji-wrapper">
        <span
          class="emoji"
          v-for="(emoji, index) in emojis"
          :key="index"
          v-html="emoji"
          @click="selectEmoji(emoji)"
        >
        </span>
      </div>
    </template>
    <mh-button
      type="iconic"
      :icon="visible ? 'system-close' : 'ui-emoji-add'"
      size="small"
      circular
    />
  </a-popover>
</template>

<script>
import { defineComponent, computed } from "vue";

import { Popover } from "ant-design-vue";
import MhButton from "@meetinghand/button";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default defineComponent({
  name: "Emoji",
  components: {
    [Popover.name]: Popover,
    MhButton,
    MhIcon,
  },
  props: {
    emojis: {
      type: Array,
      default: () => ["&#x1F600;", "&#x1F44F;", "&#x1F44D;", "&#x2764;"],
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["selected", "update:visible"],
  setup(props, { emit }) {
    const visibleStatus = computed({
      get() {
        return props.visible;
      },
      set(data) {
        emit("update:visible", data);
      },
    });
    const selectEmoji = (emoji) => {
      emit("selected", emoji);
      visibleStatus.value = false;
    };

    return {
      selectEmoji,
      visibleStatus,
    };
  },
});
</script>




<style lang="scss">
@import "./assets/main.scss";
</style>
