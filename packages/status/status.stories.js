import { storiesOf } from "@storybook/vue3";
import Status from "./index";

import "../../assets/storybook/storybook.css";


storiesOf("Status", module).add("All", () => ({
	components: { Status },
	template: `
  <div class="storybook-status">
      <h1>Green</h1>
      <Status color="green" message="Enabled" icon="ui-time"/>
      <br/>
      <hr/>
      <h1>Yellow</h1>
      <Status color="yellow" message="Pending"/>
      <br/>
			<hr/>
      <h1>Red</h1>
      <Status color="red" message="Warning" icon="ui-check"/>
      <br/>
			<hr/>
      <h1>Disabled</h1>
      <Status color="green" message="Disabled" disabled icon/>
      <br/>
      <br/>
  </div>

    `,
}));
