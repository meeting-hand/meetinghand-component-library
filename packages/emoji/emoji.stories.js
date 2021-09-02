import { storiesOf } from "@storybook/vue3";
import MhEmoji from "./index";

storiesOf("Emoji", module).add("Emoji!", () => ({
  components: { MhEmoji },
  data() {
    return {
      emoji: null,
      
    };
  },
  template: `
      <mh-emoji v-model="emoji"/>
      {{emoji}}
      
    `,
}));

    