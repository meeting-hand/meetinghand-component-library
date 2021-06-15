import { storiesOf } from "@storybook/vue3";
import Status from "./index";

storiesOf("Status", module).add("All", () => ({
	components: { Status },
	template: `
      <Status color="green" message="Enabled" icon="ui-time"/>
      <br/>
      <br/>
      <Status color="yellow" message="Pending"/>
      <br/>
			<br/>
      <br/>
      <Status color="red" message="Warning" icon="ui-check"/>
      <br/>
			<br/>
      <br/>
      <Status color="green" message="Disabled" disabled icon/>
      <br/>
      <br/>

    `,
}));
