import { storiesOf } from "@storybook/vue3";
import MhSelect from "./index";

import "../../assets/storybook/storybook.css";

storiesOf("Select", module).add("Default", () => ({
    components: { MhSelect },
    data() {
        return {
            select1: null,
            select2: null,
            select3: 1,
            select4: null,
            selectOpts: [{
                    value: 1,
                    label: "<b>Neset Ertas</b>",
                },
                {
                    value: 2,
                    label: "Freddie Mercury",
                },
                {
                    value: 3,
                    label: "Grace Slick",
                },
                {
                    value: 4,
                    label: "Hasan ali yucel",
                },
                {
                    value: 5,
                    label: "ahmet hamdi",
                },
            ],
            selectOpts2: [{
                    value: "K44LTI",
                    label: "K44LTI",
                    selectedLabel: "Discount: ₺10.00",
                },
                {
                    value: "WG08TH",
                    label: "WG08TH",
                    selectedLabel: "Discount: ₺10.00",
                },
                {
                    value: "Heyyou",
                    label: "Heyyou",
                    selectedLabel: "Discount: ₺10.00",
                },
                {
                    value: "XYIGZK",
                    label: "XYIGZK",
                    selectedLabel: "Discount: ₺10.00",
                },
                {
                    value: "JSUUSV",
                    label: "JSUUSV",
                    selectedLabel: "Discount: ₺10.00",
                },
            ],
        };
    },
    template: `
	<div class="storybook-select">
			<h1>Default</h1>
      <mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" /> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
			<h1>Searchable</h1>
      <mh-select v-model="select2" :options="selectOpts" searchable placeholder="Birini seciniz" /> <span v-if="select2" style="margin-left: 30px;" image="dsad">Value: {{ select2 }}</span>
			<hr />
			<h1>Disabled</h1>
      <mh-select v-model="select3" :options="selectOpts" searchable placeholder="Birini seciniz" disabled /> <span v-if="select3" style="margin-left: 30px;">Value: {{ select3 }}</span>
			<hr />
			<h1>Error</h1>
      <mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" has-error error-message="this field is required"/> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
			<h1>Label</h1>
      <mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" label="Choose" /> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
			<h1>Small</h1>
      		<mh-select v-model="select1" :options="selectOpts" placeholder="Birini seciniz" size="small"/> <span v-if="select1" style="margin-left: 30px;">Value: {{ select1 }}</span>
			<hr />
      		<mh-select v-model="select2" disabled :options="selectOpts" placeholder="Birini seciniz" size="small"/> <span v-if="select2" style="margin-left: 30px;">Value: {{ select2 }}</span>
			<hr />
      		<mh-select v-model="select3" has-error error-message="this field is required" :options="selectOpts" placeholder="Birini seciniz" size="small"/> <span v-if="select3" style="margin-left: 30px;">Value: {{ select3 }}</span>
			<br /><br />
			<mh-select v-model="select4" :options="selectOpts2" searchable />
			{{ select4 }}
			<br /><br />
	</div>
    `,
}));

storiesOf("Select", module).add("Country", () => ({
    components: { MhSelect },
    data() {
        return {
            select1: null,
            select2: "TR",
            select3: "US",
        };
    },
    template: `
	<div class="storybook-select">
			<h1>Default</h1>
      <mh-select v-model="select1" input-type="country" placeholder="Birini seciniz" label="Country" :truncateLength="15" />
			{{ select1 }}
			<hr />
			<h1>Disabled</h1>
      <mh-select v-model="select2" input-type="country" searchable placeholder="Birini seciniz" disabled />
			<hr />
			<h1>Error</h1>
      <mh-select v-model="select3" input-type="country" placeholder="Birini seciniz" has-error error-message="this field is required"/>
			<hr />
	</div>
    `,
}));