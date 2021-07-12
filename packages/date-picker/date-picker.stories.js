import { storiesOf } from "@storybook/vue3";
import MhDatePicker from "./index";

import "../../assets/storybook/storybook.css";

storiesOf("DatePicker", module).add("Default", () => ({
    components: { MhDatePicker },
    data() {
        return {
            date1: null,
            date2: "05.15.2021",
            date3: null,
            date4: "25.01.2021",
            date5: "",
        };
    },
    template: `
	<div class="storybook-datepicker">
			<h1>Default (DD.MM.YYYY)</h1>
      <mh-date-picker v-model="date1" placeholder="Default Empty Date" /> <span style="margin-left: 40px;">{{ date1 }}</span>
			<br />
			<br />
			<h1>Default (MM.DD.YYYY)</h1>
      <mh-date-picker v-model="date2" placeholder="Default Empty Date" format="MM.DD.YYYY" /> <span style="margin-left: 40px;">{{ date2 }}</span>
			<hr />
			<h1>Error</h1>
      <mh-date-picker v-model="date3" has-error error-message="Field is required" placeholder="Error Date Placeholder" />
			<hr />
			<h1>Disabled</h1>
      <mh-date-picker v-model="date4" disabled placeholder="Disabled Date Placeholder" />
			<hr />
			<h1>Disabled Dates</h1>
      <mh-date-picker v-model="date5" disabledStartDate="2021-06-10" disabledEndDate="2021-06-23" placeholder="Disabled Start & End Date" />
			<hr />
	</div>
    `,
}));

storiesOf("DatePicker", module).add("Range", () => ({
    components: { MhDatePicker },
    data() {
        return {
            date1: ["", ""],
            date2: ["15.01.2021", "18.01.2021"],
            date3: ["15.01.2021", "18.01.2021"],
            date4: ["15.01.2021", "18.01.2021"],
            date5: ["", ""],
        };
    },
    template: `
	<div class="storybook-datepicker">

			<h1>Default</h1>
      <mh-date-picker v-model="date1" type="range" :placeholder="['Start Date', 'End Date']" :format="['DD.MM.YYYY', 'DD.MM.YYYY']" label-left="Start Date" label-right="End date"/> <span style="margin-left: 40px;">{{ date1 }}</span>
			 <br />
			<br />
     <mh-date-picker v-model="date2" type="range" :placeholder="['Start Date', 'End Date']" :format="['DD.MM.YYYY', 'DD.MM.YYYY']" /> <span style="margin-left: 40px;">{{ date2 }}</span>
			<hr />
			<h1>Error</h1>
      <mh-date-picker v-model="date3" type="range" has-error error-message="Field is required" :placeholder="['Start Date', 'End Date']" :format="['DD.MM.YYYY', 'DD.MM.YYYY']" />
			<hr />
			<h1>Disabled</h1>
      <mh-date-picker v-model="date4" type="range" disabled :placeholder="['Start Date', 'End Date']" :format="['DD.MM.YYYY', 'DD.MM.YYYY']" />
			<hr />
				<h1>Disabled Dates</h1>
      <mh-date-picker v-model="date5" type="range" :disabledStartDate="new Date()" disabledEndDate="2021-07-23" placeholder="Disabled Start & End Date" />
			<hr />
	</div>


    `,
}));