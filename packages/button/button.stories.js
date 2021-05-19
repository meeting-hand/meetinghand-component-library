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
    <h1>Large</h1>
      <mh-button type="primary" size="large">
        Large
      </mh-button>
      <mh-button type="primary" size="large" icon="arrow-up">
        Large Left Icon
      </mh-button>
      <mh-button type="primary" size="large" icon="arrow-up" icon-alignment="right">
        Large Right Icon
      </mh-button>
      <hr />
      <h1>Default</h1>
      <mh-button type="primary">
        Default size
      </mh-button>
      <mh-button type="primary" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="primary" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <h1>Disabled</h1>
      <mh-button type="primary" disabled size="large">
        Large size
      </mh-button>
      <mh-button type="primary" disabled>
        Default size
      </mh-button>
      <mh-button type="primary" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="primary" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <h1>Wait</h1>
      <mh-button type="primary" size="large" wait>
        Large size
      </mh-button>
      <mh-button type="primary" wait>
        Default size
      </mh-button>
      <mh-button type="primary" icon="arrow-down" wait>
        Icon Left
      </mh-button>
      <mh-button type="primary" icon="arrow-up" icon-alignment="right" wait>
        Icon Right
      </mh-button>
    `,
}));

storiesOf("Button", module).add("secondary", () => ({
  components: { MhButton },
  template: `
      <h1>Large</h1>
      <mh-button type="secondary" size="large">
        Large
      </mh-button>
      <mh-button type="secondary" size="large" icon="arrow-up">
        Large Left Icon
      </mh-button>
      <mh-button type="secondary" size="large" icon="arrow-up" icon-alignment="right">
        Large Right Icon
      </mh-button>
      <hr />
      <h1>Default</h1>
      <mh-button type="secondary">
        Default size
      </mh-button>
      <mh-button type="secondary" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <h1>Disabled</h1>
      <mh-button type="secondary" disabled size="large">
        Large size
      </mh-button>
      <mh-button type="secondary" disabled>
        Default size
      </mh-button>
      <mh-button type="secondary" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <h1>Wait</h1>
      <mh-button type="secondary" size="large" wait>
        Large size
      </mh-button>
      <mh-button type="secondary" wait>
        Default size
      </mh-button>
      <mh-button type="secondary" icon="arrow-down" wait>
        Icon Left
      </mh-button>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right" wait>
        Icon Right
      </mh-button>
    `,
}));

storiesOf("Button", module).add("text", () => ({
  components: { MhButton },
  template: `
      <h1>Default</h1>
      <mh-button type="text">
        Default size
      </mh-button>
      <mh-button type="text" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="text" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <h1>Disabled</h1>
      <mh-button type="text" disabled>
        Default size
      </mh-button>
      <mh-button type="text" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="text" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <h1>Wait</h1>
      <mh-button type="text" wait>
        Default size
      </mh-button>
      <mh-button type="text" icon="arrow-down" wait>
        Icon Left
      </mh-button>
      <mh-button type="text" icon="arrow-up" icon-alignment="right" wait>
        Icon Right
      </mh-button>
    `,
}));
