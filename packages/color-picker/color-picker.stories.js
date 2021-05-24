import { storiesOf } from "@storybook/vue3";
import MhColorPicker from "./index";

storiesOf("ColorPicker", module).add("Default", () => ({
  components: { MhColorPicker },
  data() {
    return {
      color1: "#000000",
    };
  },
  template: `
      <mh-color-picker v-model="color1" />
      <br />
      {{ color1 }}
    `,
}));
