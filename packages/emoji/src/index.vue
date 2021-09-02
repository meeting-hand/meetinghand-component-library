<template>
  
    <a-popover
      placement="left"
      trigger="click"
      overlayClassName="list-emoji-wrapper"
    >
      <template #content>
        <span class="emoji" v-for="emoji,index in emojis" :key="index" v-html="emoji" @click="selectEmoji(emoji)">
        </span>
      </template>
      <mh-button
        type="iconic"
        icon="ui-emoji-add"
        size="small"
        circular
      />
    </a-popover>
  
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
    emojis: {
      type: Array,
      default: ["&#x1F600;", "&#x1F44F;", "&#x1F44D;" , "&#x2764;"]
    }
  },
  setup(props, {emit}) {

     const selectEmoji = (emoji) => {
           emit("selectEmoji", emoji);       
     }
    return {
      selectEmoji,
    }
  },
};
</script>



<style lang="scss">
@import "./assets/main.scss";
</style>
