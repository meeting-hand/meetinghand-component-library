<template>
  <a-popover placement="left" trigger="click" v-model:visible="popoverStatus">
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
      :icon="popoverStatus ? 'system-close' : 'ui-emoji-add'"
      size="small"
      circular
    />
  </a-popover>
</template>

<script>
import { defineComponent, ref } from "vue";

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
      default: ["&#x1F600;", "&#x1F44F;", "&#x1F44D;", "&#x2764;"],
    },
  },
  setup(props, { emit }) {
    const popoverStatus = ref(false);

    const selectEmoji = (emoji) => {
      emit("update:modelValue", emoji);
      popoverStatus.value = false;
    };

    return {
      selectEmoji,
      popoverStatus,
    };
  },
});
</script>




<style lang="scss">
@import "./assets/main.scss";
</style>
