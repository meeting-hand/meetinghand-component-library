import { storiesOf } from "@storybook/vue3";
import MhColorPicker from "./index";

storiesOf("ColorPicker", module).add("default", () => ({
  components: { MhColorPicker },
  data() {
    return {
      color1: "#000000",
    };
  },
  template: `
      <mh-color-picker type="default" v-model="color1" />
      <br />
      {{ color1 }}
    `,
}));

storiesOf("ColorPicker", module).add("palette", () => ({
  components: { MhColorPicker },
  data() {
    return {
      color1: "#000000",
      colors: ["#6421F3", "#3F51B5", "#4CAF50", "#2A535D", "#9C27B0", "#F44336", "#0EAD88", "#FF9800", "#FFC700","#3FA0B5", "#00D1FF", "#C336F4" ],
    };
  },
  template: `
      <mh-color-picker type="palette" v-model="color1" :colors="colors"/>
      <br />
      {{ color1 }}
    `,
}));
