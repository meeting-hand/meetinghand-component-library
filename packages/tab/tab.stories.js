import { storiesOf } from "@storybook/vue3";
import MhTab from "./index";

storiesOf("Tab", module).add("All", () => ({
	components: { MhTab },
	template: `
      <h1>Blue</h1>
      <mh-tab />
      <hr/>
      <h1>Rounded</h1>
      <mh-tab type="rounded"/>
    `,
}));
