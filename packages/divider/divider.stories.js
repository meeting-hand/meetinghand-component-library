import { storiesOf } from "@storybook/vue3";
import Divider from "./index";

storiesOf("Divider", module).add("Divider!", () => ({
  components: { Divider },
  template: `
      <Divider size="thin"/>
      <Divider size="normal"/>
      <Divider size="medium"/>
      <Divider size="bold"/>
      <Divider size="xxbold"/>
    `,
}));

    