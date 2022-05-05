import { storiesOf } from "@storybook/vue3";
import Tooltip from "../src/tooltip/index";

import "./storybook.scss";

storiesOf("Tooltip", module).add("All", () => ({
    components: { Tooltip },
    template: `
    <div class="storybook">
      <h1>Placement Top</h1>
      <tooltip size="large" placement="top" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <hr/>
      <h1>Placement Bottom</h1>
      <tooltip size="small" placement="bottom" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <hr/>
      <h1>Placement Right</h1>
      <tooltip size="small" placement="right" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <hr/>
      <h1>Placement Left</h1>
      <tooltip size="small" placement="left" text="Lorem ipsum dolor sit amet.">
      Tooltip will show when mouse enter.
      </tooltip>
      <hr/>
    </div>
    `,
}));