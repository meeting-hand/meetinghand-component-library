import { storiesOf } from "@storybook/vue3";
import MhCheckbox from "./index";

storiesOf("Checkbox", module).add("Single", () => ({
  components: { MhCheckbox },
  data() {
    return {
      value: false,
      value2: false,
      value3: true,
    };
  },
  template: `
      <mh-checkbox v-model="value" label="default checkbox" />
      <br />
      <br />
      <pre>{{ value }}</pre>
      <hr />
      <mh-checkbox v-model="value2" label="disabled false" disabled />
      <br />
      <br />
      <pre>{{ value2 }}</pre>
      <hr />
      <mh-checkbox v-model="value3" label="disabled true" disabled />
      <br />
      <br />
      <pre>{{ value3 }}</pre>
    `,
}));

storiesOf("Checkbox", module).add("Group", () => ({
  components: { MhCheckbox },
  data() {
    return {
      value: ["John"],
    };
  },
  template: `
      <mh-checkbox v-model="value" label="John" data="John" />
      <br />
      <mh-checkbox v-model="value" label="Allen" data="Allen" />
      <br />
      <pre>{{ value }}</pre>
    `,
}));
