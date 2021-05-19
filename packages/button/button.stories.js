import { storiesOf } from "@storybook/vue3";
import MhButton from "./index";

import "../../assets/storybook/buttons.css";

storiesOf("Button", module).add("All", () => ({
  components: { MhButton },
  template: `
      <mh-button type="primary">
      Primary Button
      </mh-button>
      <mh-button type="secondary">
      Secondary Button
      </mh-button>
      <mh-button type="text">
      Text Button
      </mh-button>
      <mh-button type="small">
      Small Button
      </mh-button>
      <mh-button type="row">
      Row Button
      </mh-button>
    `,
}));
storiesOf("Button", module).add("primary", () => ({
  components: { MhButton },
  template: `
      <mh-button type="primary" size="large">
        Primary Large
      </mh-button>
      <mh-button type="primary">
        Default size
      </mh-button>
      <mh-button type="primary" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="primary" icon="arrow-up">
        Icon Right
      </mh-button>
    `,
}));
