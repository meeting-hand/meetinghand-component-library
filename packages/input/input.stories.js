import { storiesOf } from "@storybook/vue3";
import MhInput from "./index";

import "../../assets/storybook/input.css";

storiesOf("Input", module).add("Input", () => ({
	components: { MhInput },
	template: `
      <h1>Standart</h1>
      <mh-input />
      <br />
      <br />
      <mh-input left-icon="arrow-down" right-icon="arrow-up" />
      <hr />
      <h1>Error</h1>
      <mh-input has-error error-message="this field is required" />
      <br />
      <br />
      <mh-input has-error error-message="this field is required" left-icon="arrow-down" right-icon="arrow-up" />
      <h1>Disabled</h1>
      <mh-input disabled />
      <br />
      <br />
      <mh-input disabled left-icon="arrow-down" right-icon="arrow-up" />
      <h1>Clear</h1>
      <mh-input allow-clear />
      <br />
      <br />
      <mh-input allow-clear has-error />
      <br />
      <br />
      <mh-input allow-clear disabled />
      <br />
      <br />
    `,
}));
storiesOf("Input", module).add("Password", () => ({
	components: { MhInput },
	template: `
      <h1>Standart</h1>
      <mh-input input-type="password" />
      <br />
      <br />
      <mh-input input-type="password" />
      <hr />
      <h1>Error</h1>
      <mh-input input-type="password" has-error error-message="this field is required" />
      <br />
      <br />
      <mh-input input-type="password" has-error error-message="this field is required" />
      <h1>Disabled</h1>
      <mh-input input-type="password" disabled />
      <br />
      <br />
      <mh-input input-type="password" disabled />
    `,
}));
storiesOf("Input", module).add("Tel", () => ({
	components: { MhInput },
	template: `
			<h1>Standart</h1>
      <mh-input input-type="tel" />
			<hr />
			<h1>Error</h1>
			<mh-input input-type="tel" has-error error-message="this field is required" />
			<hr />
			<h1>Disabled</h1>
      <mh-input input-type="tel" disabled />
			<hr />
    `,
}));
