import { storiesOf } from "@storybook/vue3";
import MhDatePicker from "./index";

storiesOf("DatePicker", module).add("DatePicker!", () => ({
	components: { MhDatePicker },
	data() {
		return {
			date1: "",
			date2: "15.01.2021",
			date3: null,
			date4: "25.01.2021",
		};
	},
	template: `
			<h1>Default</h1>
      <mh-date-picker v-model="date1" placeholder="Default Empty Date" /> <span style="margin-left: 40px;">{{ date1 }}</span>
			<br />
			<br />
      <mh-date-picker v-model="date2" placeholder="Placeholder" /> <span style="margin-left: 40px;">{{ date2 }}</span>
			<hr />
			<h1>Error</h1>
      <mh-date-picker v-model="date3" has-error error-message="Field is required" placeholder="Error Date Placeholder" />
			<hr />
			<h1>Disabled</h1>
      <mh-date-picker v-model="date4" disabled placeholder="Disabled Date Placeholder" />
			<hr />
    `,
}));
