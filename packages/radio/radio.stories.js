import { storiesOf } from "@storybook/vue3";
import MhRadio from "./index";

storiesOf("Radio", module).add("All", () => ({
  components: { MhRadio },
  data(){
    return {
      value1: "Ahmet",
      value2: false,
    }
  },
  template: `
      <h1>Default</h1>
      <mh-radio v-model="value1" text="Ahmet Ozturk" data="Ahmet" />
      <br />
      <mh-radio v-model="value1" text="Mehmet Ozturk" data="Mehmet" />
      <br />
      <br />
      {{ value1 }}
      <hr />
      <h1>Disabled</h1>
      <mh-radio v-model="value1" text="Ahmet Ozturk" data="Ahmet" disabled />
      <br />
      <mh-radio v-model="value1" text="Mehmet Ozturk" data="Mehmet" disabled />
      <br />
      <br />
      {{ value2 }}
    `,
}));

    