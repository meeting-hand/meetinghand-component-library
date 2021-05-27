import { storiesOf } from "@storybook/vue3";
import MhInput from "./index";

import "../../assets/storybook/input.css";

storiesOf("Input", module).add("Input", () => ({
	components: { MhInput },
	data() {
		return {
			value1: "",
			value2: "",
			value3: "",
			value4: "",
			value5: "",
			value6: "",
			value7: "",
			value8: "",
		};
	},
	template: `
      <h1>Standart</h1>
      <mh-input v-model="value1" />
      <br />
      <br />
      <mh-input v-model="value2" left-icon="arrow-down" right-icon="arrow-up" />
      <hr />
      <h1>Error</h1>
      <mh-input v-model="value3" has-error error-message="this field is required" />
      <br />
      <br />
      <mh-input v-model="value4" has-error error-message="this field is required" left-icon="arrow-down" right-icon="arrow-up" />
      <h1>Disabled</h1>
      <mh-input disabled />
      <br />
      <br />
      <mh-input v-model="value5" disabled left-icon="arrow-down" right-icon="arrow-up" />
      <h1>Clear</h1>
      <mh-input v-model="value6" allow-clear />
      <br />
      <br />
      <mh-input v-model="value7" allow-clear has-error />
      <br />
      <br />
      <mh-input v-model="value8" allow-clear disabled />
      <br />
      <br />
    `,
}));
storiesOf("Input", module).add("Password", () => ({
	components: { MhInput },
	data() {
		return {
			pass1: "",
			pass2: "",
			pass3: "",
			pass4: "",
			pass5: "",
		};
	},
	template: `
      <h1>Standart</h1>
      <mh-input v-model="pass1" input-type="password" />
      <br />
      <br />
      <mh-input v-model="pass2" input-type="password" />
      <hr />
      <h1>Error</h1>
      <mh-input v-model="pass3" input-type="password" has-error error-message="this field is required" />
      <br />
      <br />
      <mh-input v-model="pass4" input-type="password" has-error error-message="this field is required" />
      <h1>Disabled</h1>
      <mh-input v-model="pass5" input-type="password" disabled />
      <br />
      <br />
      <mh-input input-type="password" disabled />
    `,
}));
storiesOf("Input", module).add("Tel", () => ({
	components: { MhInput },
	data() {
		return {
			tel1: "",
			tel2: "",
			tel3: "",
		};
	},
	template: `
			<h1>Standart</h1>
      <mh-input v-model="tel1" input-type="tel" />
			<hr />
			<h1>Error</h1>
			<mh-input v-model="tel2" input-type="tel" has-error error-message="this field is required" />
			<hr />
			<h1>Disabled</h1>
      <mh-input v-model="tel3" input-type="tel" disabled />
			<hr />
    `,
}));
