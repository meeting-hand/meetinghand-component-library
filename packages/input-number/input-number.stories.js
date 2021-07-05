import { storiesOf } from "@storybook/vue3";
import MhInputNumber from "./index";

import "../../assets/storybook/storybook.css";


storiesOf("InputNumber", module).add("Default", () => ({
	components: { MhInputNumber },
	data() {
		return {
			number1: 0,
			number2: 16,
			number3: 24,
		};
	},
	template: `
  <div class="storybook-input-number">

      <h1>Number Default</h1>
      <mh-input-number v-model="number1" :max="10000000000" :min="5" />
      <hr>
      <h1>Number Error</h1>
      <mh-input-number v-model="number2" has-error error-message="Field is required" />
      <hr>
      <h1>Number Disabled</h1>
      <mh-input-number v-model="number3" disabled />
      <hr>
    </div>
    `,
}));

storiesOf("InputNumber", module).add("Currency", () => ({
	components: { MhInputNumber },
	data() {
		return {
			currency: 0,
			currency1: 12.53,
			currency2: 16.35,
			currency3: 124.99,
			currency4: 2124.99,
			currency5: 100,
			currency6: 100,
		};
	},
	template: `
  <div class="storybook-divider">

      <h1>Currency Default</h1>
      <mh-input-number v-model="currency" type="currency" currency="USD" :max="100000" title="Min. amount"/>
			<br />
      <br />
      <mh-input-number v-model="currency1" type="currency" currency="USD" :max="100000" />
      <br />
      <br />
      <mh-input-number v-model="currency2" type="currency" currency="EUR" :max="100000" />
      <br />
      <br />
      <mh-input-number v-model="currency3" type="currency" currency="GBP" :max="100000" />
      <br />
      <br />
      <mh-input-number v-model="currency4" type="currency" currency="TRY" :max="100000" />
      <br />
      <br />
      <hr>
      <h1>Currency Error</h1>
      <mh-input-number v-model="currency5" has-error error-message="Field is required" type="currency" />
      <hr>
      <h1>Currency Disabled</h1>
      <mh-input-number v-model="currency6" disabled type="currency" />
      <br/><br/>
    </div>
    `,
}));
