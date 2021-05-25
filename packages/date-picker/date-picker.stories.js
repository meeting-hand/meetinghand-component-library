import { storiesOf } from "@storybook/vue3";
import MhDatePicker from "./index";

storiesOf("DatePicker", module).add("DatePicker!", () => ({
	components: { MhDatePicker },
	data() {
		return {
			date1: "",
			date2: "15.01.2021",
		};
	},
	template: `
			<h1>Default</h1>
      <mh-date-picker v-model="date1" /> <span style="margin-left: 40px;">{{ date1 }}</span>
			<br />
			<br />
      <mh-date-picker v-model="date2" /> <span style="margin-left: 40px;">{{ date2 }}</span>
			<hr />
    `,
}));
