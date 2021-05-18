import { storiesOf } from "@storybook/vue3";
import Divider from "./index";

storiesOf("Divider", module).add("Divider!", () => ({
  components: { Divider },
  template: `
      <Divider class="size-thin"/>
      <Divider class="size-normal"/>
      <Divider class="size-medium"/>
      <Divider class="size-bold"/>
      <Divider class="size-xxbold"/>
    `,
}));

    