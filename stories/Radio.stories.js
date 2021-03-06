import { storiesOf } from "@storybook/vue3";
import MhRadio from "../src/radio/index";

import "./storybook.scss";

storiesOf("Radio", module).add("Default", () => ({
    components: { MhRadio },
    data() {
        return {
            value1: true,
            value2: "Mehmet",
        };
    },
    template: `
  <div class="storybook-radio">
      <h1>Default</h1>
      <mh-radio v-model="value1" text="Ahmet Ozturk"  :data="true" error-message="this field is required"/>
      <br />
      <mh-radio v-model="value1" text="Mehmet Ozturk" :data="false"/>
      <br />
      <br />
      {{ value1 }}
      <hr />
      <h1>Disabled</h1>
      <mh-radio v-model="value2" text="Ahmet Ozturk" data="Ahmet" disabled />
      <br />
      <mh-radio v-model="value2" text="Mehmet Ozturk" data="Mehmet" disabled />
      <br />
      <br />
    </div>
    `,
}));
storiesOf("Radio", module).add("Button", () => ({
    components: { MhRadio },
    data() {
        return {
            value1: "Ahmet",
            value2: "Mehmet",
        };
    },
    template: `
  <div class="storybook-radio">
      <h1>Default</h1>
      <mh-radio v-model="value1" text="Ahmet Ozturk" data="Ahmet" type="button" />
      <br />
      <mh-radio v-model="value1" text="Mehmet Ozturk" data="Mehmet" type="button" />
      <br />
      <br />
      {{ value1 }}
      <hr />
      <h1>Disabled</h1>
      <mh-radio v-model="value2" text="Ahmet Ozturk" data="Ahmet" type="button" disabled />
      <br />
      <mh-radio v-model="value2" text="Mehmet Ozturk" data="Mehmet" type="button" disabled />
      <br />
      <br />
  </div>
    `,
}));