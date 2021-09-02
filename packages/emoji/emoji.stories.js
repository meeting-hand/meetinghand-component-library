import { storiesOf } from "@storybook/vue3";
import MhEmoji from "./index";

storiesOf("Emoji", module).add("Emoji!", () => ({
  components: { MhEmoji },
 
  template: `
      <mh-emoji/>
      
    `,
}));

    