import { storiesOf } from "@storybook/vue3";
import MhInput from "./index";

import "../../assets/storybook/input.css";

storiesOf("Input", module).add("Input", () => ({
  components: { MhInput },
  template: `
      <h1>Standart</h1>
      <mh-input />
      <hr />
      <h1>Error</h1>
      <mh-input has-error error-message="this field is required" />
      <h1>Disabled</h1>
      <mh-input disabled />
    `,
}));
