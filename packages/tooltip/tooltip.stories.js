import { storiesOf } from "@storybook/vue3";
import Tooltip from "./index";

storiesOf("Tooltip", module).add("Tooltip!", () => ({
  components: { Tooltip },
  template: `
      <Tooltip size="large"/>
      <Tooltip size="small"/>
    `,
}));

    