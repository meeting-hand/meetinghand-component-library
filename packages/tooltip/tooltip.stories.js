import { storiesOf } from "@storybook/vue3";
import Tooltip from "./index";

import "../../assets/storybook/tooltip.css";


storiesOf("Tooltip", module).add("All", () => ({
  components: { Tooltip },
  template: `
    <div class="tooltip-wrapper">
      <h1>Placement Top</h1>
      <br/>
      <tooltip size="large" placement="top" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <h1>Placement Bottom</h1>
      <br/>
      <tooltip size="small" placement="bottom" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <h1>Placement Right</h1>
      <br/>
      <tooltip size="small" placement="right" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <h1>Placement Left</h1>
      <br/>
      <tooltip size="small" placement="left" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
    </div>
    `,
}));

    