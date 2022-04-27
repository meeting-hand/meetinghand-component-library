import { storiesOf } from "@storybook/vue3";
import Divider from "../src/divider/index";

import "./storybook.scss";

storiesOf("Divider", module).add("All", () => ({
    components: { Divider },
    template: `
    <div class="storybook-divider">
      <h1>Thin</h1>
      <divider size="thin"/>
      <h1>Normal</h1>
      <divider size="normal"/>
      <h1>Medium</h1>
      <divider size="medium"/>
      <h1>Bold</h1>
      <divider size="bold"/>
    </div>
    `,
}));