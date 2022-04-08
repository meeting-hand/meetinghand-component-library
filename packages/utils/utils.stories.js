import { storiesOf } from "@storybook/vue3";
import Utils from "./index";

storiesOf("Utils", module).add("Utils!", () => ({
  components: { Utils },
  template: `
      <Utils />
    `,
}));

    