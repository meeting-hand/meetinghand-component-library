import { storiesOf } from "@storybook/vue3";
import MhSwitch from "./index";

import "../../assets/storybook/storybook.css";


storiesOf("Switch", module).add("All", () => ({
  components: { MhSwitch },
  data(){
    return {
      value1: true,
      value2: false,
    }
  },
  template: `
  <div class="storybook-switch">
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
  </div>
    `,
}));

    