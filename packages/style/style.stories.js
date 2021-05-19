import { storiesOf } from "@storybook/vue3";

import MhIcon from "./icons/index";

import "../../assets/storybook/style.css";

storiesOf("Style", module).add("Style!", () => ({
  template: `
    <h1>MeetingHand Base Style Library</h1>
    <p>Common scss variables & styles</p>

    <h2>Colors</h2>
    <p>assets/colors.scss</p>
    `,
}));

storiesOf("Style", module).add("icons", () => ({
  components: { MhIcon },
  template: `
    <h1>Icons</h1>
    <mh-icon name="arrow-down" />
    <mh-icon name="arrow-up" />
    <mh-icon name="arrow-left" />
    <mh-icon name="arrow-right" />
    <mh-icon name="order-down" />
    <mh-icon name="order-up" />
    <mh-icon name="sub-right-arrow" />
    <mh-icon name="sub-left-arrow" />
    <mh-icon name="wait" />
    `,
}));

    