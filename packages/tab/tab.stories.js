import { storiesOf } from "@storybook/vue3";
import MhTab from "./index";

storiesOf("Tab", module).add("All", () => ({
  components: { MhTab },
  template: `
      <h1>Blue</h1>
      <mh-tab color="blue"/>
      <hr/>
      <h1>Black</h1>
      <mh-tab color="black"/>
    `,
}));

    