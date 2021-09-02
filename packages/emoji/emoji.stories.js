import { storiesOf } from "@storybook/vue3";
import MhEmoji from "./index";

storiesOf("Emoji", module).add("Emoji!", () => ({
  components: { MhEmoji },
  template: `
      <mh-emoji >
      <span class="emoji">&#x1F60a;</span>
      <span class="emoji">&#x1F605;</span>
      <span class="emoji">&#x1F605;</span>
      <span class="emoji">&#x1F605;</span>
      </mh-emoji>
    `,
}));

    