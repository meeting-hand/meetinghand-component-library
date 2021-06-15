import { storiesOf } from "@storybook/vue3";
import Status from "./index";

storiesOf("Status", module).add("All", () => ({
  components: { Status },
  template: `
      <Status color="green" message="Enabled" icon/>
      <br/>
      <Status color="yellow" message="Pending"/>
      <br/>
      <Status color="red" message="Enabled"/>
      <br/>
      <Status color="green" message="Disabled" disabled icon/>
      <br/>

    `,
}));

    