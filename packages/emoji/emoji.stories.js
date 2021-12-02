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
      <mh-emoji v-model:visible="visible"/>
    `,
}));

    