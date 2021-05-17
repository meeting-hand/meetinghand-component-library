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
      <mh-button type="primary" size="default">
        Primary Default
      </mh-button>
      <mh-button type="primary" size="default" icon="arrow-down">
        Primary Default with Arrow Down Icon
      </mh-button>
      <hr />
      <mh-button type="primary" size="large">
        Primary Large
      </mh-button>
    `,
}));
