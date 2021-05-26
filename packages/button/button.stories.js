import { storiesOf } from "@storybook/vue3";
import MhButton from "./index";

import "../../assets/storybook/buttons.css";

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
    `,
}));

storiesOf("Button", module).add("small", () => ({
  components: { MhButton },
  template: `
      <h1>Default</h1>
      <mh-button type="small">
        Default size
      </mh-button>
      <mh-button type="small" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="small" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <h1>Disabled</h1>
      <mh-button type="small" disabled>
        Default size
      </mh-button>
      <mh-button type="small" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="small" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <h1>Wait</h1>
      <mh-button type="small" wait>
        Default size
      </mh-button>
    `,
}));

storiesOf("Button", module).add("row", () => ({
  components: { MhButton },
  template: `
      <h1>Default</h1>
      <mh-button type="row">
        Default size
      </mh-button>
      <mh-button type="row" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="row" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <h1>Disabled</h1>
      <mh-button type="row" disabled>
        Default size
      </mh-button>
      <h1>Wait</h1>
       <mh-button type="row" wait>
        Row Butotn
      </mh-button>
    `,
}));

storiesOf("Button", module).add("social", () => ({
  components: { MhButton },
  template: `
      <h1>Google</h1>
      <mh-button type="social" icon="social-google" socialMedia="google">
        Google
      </mh-button>
      <h1>Facebook</h1>
      <mh-button type="social" icon="social-face-book" socialMedia="facebook">
        Facebook
      </mh-button>
      <h1>Linkedin</h1>
      <mh-button type="social" icon="social-linkedin" socialMedia="linkedin">
        Linkedin
      </mh-button>
      
    `,
}));
