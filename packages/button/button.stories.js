import { storiesOf } from "@storybook/vue3";
import MhButton from "./index";

storiesOf("Button", module).add("a", () => ({
  components: { MhButton },
  template: `
      <mh-button color="green" justify="center" transform="uppercase" width="178px">
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

    