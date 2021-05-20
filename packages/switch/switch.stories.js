import { storiesOf } from "@storybook/vue3";
import MhSwitch from "./index";

storiesOf("Switch", module).add("All", () => ({
  components: { MhSwitch },
  data(){
    return {
      value1: false,
      value2: false,
    }
  },
  template: `
      <h1>Default</h1>
      <mh-switch v-model="value1" />
      <br />
      <br />
      {{ value1 }}
      <hr />
      <h1>Disabled</h1>
      <mh-switch v-model="value2" disabled />
      <br />
      <br />
      {{ value2 }}
    `,
}));

    