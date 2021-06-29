import { storiesOf } from "@storybook/vue3";
import MhBanner from "./index";
import MhButton from "../button/index";
import "../../assets/storybook/storybook.css";


storiesOf("Banner", module).add("All", () => ({
	components: { MhBanner,MhButton },
	template: `
  <div class="storybook-banner">
      <h1>Banner Section Text</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." />
      <hr/>
      <h1>Banner Section Text + Button</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." button="custom" custom-text="Button" section-type="success" icon="statusInfo"/>
      <hr/>
      <h1>Banner Section Text + Title</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." section-type="info" title="Lorem ipsum"/>
      <hr/>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." section-type="warning" title="Lorem ipsum"/>
      <hr/>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." section-type="error" title="Lorem ipsum"/>
      <hr/>
      <h1>Banner Section Text + Close</h1>
      <mh-banner type="section" text="Lorem ipsum dolor sit amet." button="close" />
      <hr/>
      <h1>Banner Full-Width Warning</h1>
      <mh-banner type="fullWidth" banner-type="warning" title="Title" primaryButtonColor="red" primaryButtonText="Primary" secondaryButtonText="Secondary" secondaryButtonColor="red" icon="warning">
			Lorem ipsum dolor sit amet
			</mh-banner>
      <hr/>
      <h1>Banner Full-Width Success</h1>
      <mh-banner type="fullWidth" banner-type="success" title="Title" primaryButtonColor="green" primaryButtonText="Primary" secondaryButtonText="Secondary" secondaryButtonColor="green" icon="gift">
			Lorem ipsum dolor sit amet
			</mh-banner>
      <hr/>
  </div>

    `,
}));
