import { storiesOf } from "@storybook/vue3";
import MhInputNumber from "./index";

storiesOf("InputNumber", module).add("Default", () => ({
  components: { MhInputNumber },
  data() {
    return {
      number1: 12,
      number2: 16,
      number3: 24,
    };
  },
  template: `
      <h1>Number Default</h1>  
      <mh-input-number v-model="number1" :max="10000000000" />
      <hr>
      <h1>Number Error</h1>  
      <mh-input-number v-model="number2" has-error error-message="Field is required" />
      <hr>
      <h1>Number Disabled</h1>  
      <mh-input-number v-model="number3" disabled />
      <hr>
    `,
}));

storiesOf("InputNumber", module).add("Currency", () => ({
  components: { MhInputNumber },
  data() {
    return {
      currency1: 12.53,
      currency2: 16,
      currency3: 24,
    };
  },
  template: `
      <h1>Currency Default</h1>  
      <mh-input-number v-model="currency1" type="currency" currency="USD" :max="100000" />
      <!--<h1>Currency Error</h1>  
      <mh-input-number v-model="currency2" has-error error-message="Field is required" type="currency" />
      <hr>
      <h1>Currency Disabled</h1>  
      <mh-input-number v-model="currency3" disabled type="currency" />
      <hr>-->
    `,
}));
