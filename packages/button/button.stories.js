import { storiesOf } from "@storybook/vue3";
import MhButton from "./index";

storiesOf("Button", module).add("a", () => ({
  components: { MhButton },
  template: `
      <mh-button>
      It Works!
      </mh-button>
    `,
}));
storiesOf("Button", module).add("button", () => ({
  components: { MhButton },
  template: `
      <mh-button tag="button">
      It Works!
      </mh-button>
    `,
}));

    