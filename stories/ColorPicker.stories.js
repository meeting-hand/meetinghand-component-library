import { storiesOf } from "@storybook/vue3";
import MhColorPicker from "../src/color-picker/index";

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
            colors: [
                "#3FA0B5",
                "#2A535D",
                "#0EAD88",
                "#3F51B5",
                "#FF9800",
                "#4CAF50",
                "#FFC700",
                "#C336F4",
                "#9C27B0",
                "#6421F3",
                "#00D1FF",
                "#F44336",
            ],
        };
    },
    template: `
      <mh-color-picker type="palette" v-model="color1" :colors="colors" />
      <br />
      {{ color1 }}
    `,
}));