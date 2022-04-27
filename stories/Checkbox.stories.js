import { storiesOf } from "@storybook/vue3";
import MhCheckbox from "../src/checkbox/src/index.vue";
import "./storybook.scss";

storiesOf("Checkbox", module).add("Single", () => ({
    components: { MhCheckbox },
    data() {
        return {
            value: false,
            value2: false,
            value3: false,
            value4: true,
        };
    },
    template: `
    <div class="storybook-checkbox"> 
      <mh-checkbox v-model="value" label="default checkbox" />
      <br />
      <pre>{{ value }}</pre>
      <hr />
      <mh-checkbox v-model="value2" label="error checkbox" has-error error-message="this field is required"/>
      <br />
      <pre>{{ value2 }}</pre>
      <hr />
      <mh-checkbox v-model="value3" label="disabled false" disabled />
      <br />
      <pre>{{ value3 }}</pre>
      <hr />
      <mh-checkbox v-model="value4" label="disabled true" disabled />
      <br />
      <pre>{{ value4 }}</pre>
      </div>
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
      <mh-checkbox v-model="value" label="John" data="John"  />
      <br />
      <mh-checkbox v-model="value" label="Allen" data="Allen" />
      <br />
      <pre>{{ value }}</pre>
    `,
}));