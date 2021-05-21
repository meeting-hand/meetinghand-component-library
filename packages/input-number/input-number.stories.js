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
      <mh-input-number v-model="number1" />
      <hr>
      <h1>Number Error</h1>  
      <mh-input-number v-model="number2" has-error error-message="Field is required" />
      <hr>
      <h1>Number Disabled</h1>  
      <mh-input-number v-model="number3" disabled />
      <hr>
    `,
}));
