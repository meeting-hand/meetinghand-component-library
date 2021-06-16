import { storiesOf } from "@storybook/vue3";
import MhBanner from "./index";
import "../../assets/storybook/storybook.css";

storiesOf("Banner", module).add("All", () => ({
	components: { MhBanner },
	template: `
  <div class="storybook-banner">
      <h1>Banner Section Text</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet."/>
      <hr/>
      <h1>Banner Section Text + Button</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." button="custom" custom-text="Button"/>
      <hr/>
      <h1>Banner Section Text + Close</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." button="close" />
      <hr/>
      <h1>Banner Full-Width Warning</h1>
      <mh-banner type="fullWidth" banner-type="warning">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae faucibus enim.
      Aliquam eget diam in purus viverra luctus sed at nisi.
			</mh-banner>
      <hr/>
      <h1>Banner Full-Width Success</h1>
      <mh-banner type="fullWidth" banner-type="success">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae faucibus enim.
      Aliquam eget diam in purus viverra luctus sed at nisi."
			</mh-banner>
      <hr/>
  </div>

    `,
}));
