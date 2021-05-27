import { storiesOf } from "@storybook/vue3";
import Divider from "./index";

import "../../assets/storybook/divider.css";

storiesOf("Divider", module).add("All", () => ({
	components: { Divider },
	template: `
      <h1>Thin</h1>
      <divider size="thin"/>
      <h1>Normal</h1>
      <divider size="normal"/>
      <h1>Medium</h1>
      <divider size="medium"/>
      <h1>Bold</h1>
      <divider size="bold"/>
      <h1>XXBold</h1>
      <divider size="xxbold" />
    `,
}));
