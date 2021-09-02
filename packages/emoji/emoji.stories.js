import { storiesOf } from "@storybook/vue3";
import MhEmoji from "./index";

storiesOf("Emoji", module).add("Emoji!", () => ({
  components: { MhEmoji },
  data() {
    return {
      visible: false,
      
    };
  },
  template: `
  v-model:visible="emojiPopoverStatus"
      {{emoji}}
    `,
}));

    