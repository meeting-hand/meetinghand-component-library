import { storiesOf } from "@storybook/vue3";
import MhSelect from "./index";

storiesOf("Select", module).add("All", () => ({
	components: { MhSelect },
	data() {
		return {
			select1: null,
			select2: null,
			select3: 1,
			selectOpts: [
				{
					value: 1,
					label: "Neset Ertas",
				},
				{
					value: 2,
					label: "Freddie Mercury",
				},
				{
					value: 3,
					label: "Grace Slick",
				},
			],
		};
	},
	template: `
			<h1>Default</h1>
      <mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" /> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
			<h1>Searchable</h1>
      <mh-select v-model="select2" :options="selectOpts" searchable placeholder="Birini seciniz" /> <span v-if="select2" style="margin-left: 30px;">Value: {{ select2 }}</span>
			<hr />
			<h1>Disabled</h1>
      <mh-select v-model="select3" :options="selectOpts" searchable placeholder="Birini seciniz" disabled /> <span v-if="select3" style="margin-left: 30px;">Value: {{ select3 }}</span>
			<hr />
			<h1>Error</h1>
      <mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" has-error error-message="this field is required"/> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
			<h1>Small</h1>
      		<mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" size="small"/> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
      		<mh-select v-model="select2" disabled :options="selectOpts" placeholder="Birini seciniz" size="small"/> <span v-if="select2" style="margin-left: 30px;">Value: {{ select2 }}</span>
			<hr />
      		<mh-select v-model="select3" has-error error-message="this field is required" :options="selectOpts" placeholder="Birini seciniz" size="small"/> <span v-if="select3" style="margin-left: 30px;">Value: {{ select3 }}</span>
			<hr />
    `,
}));
