import { storiesOf } from "@storybook/vue3";
import MhTextEditor from "./index";

storiesOf("TextEditor", module).add("All", () => ({
  components: { MhTextEditor },
  template: `
      <mh-text-editor placeholder="Placeholder"/>
    `,
}));

    