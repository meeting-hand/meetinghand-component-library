import { storiesOf } from "@storybook/vue3";
import MhBanner from "./index";
import MhButton from "../button/index";
import "../../assets/storybook/storybook.css";

storiesOf("Banner", module).add("All", () => ({
	components: { MhBanner, MhButton },
	data() {
		return {
			bannerStatus: true,
		};
	},
	template: `
  <div class="storybook-banner">
      <h1>Banner Section Text</h1>
      <mh-banner type="section" message="Lorem ipsum dolor sit amet."/>
     
      <hr/>
      <h1>Banner Section Text + Button</h1>
      <mh-banner type="section" message="Lorem ipsum dolor sit amet."  section-type="success">
      <mh-button type="primary">
      Button
      </mh-button>
    </mh-banner>
      <hr/>
      <h1>Banner Section Text + Title</h1>
      <mh-banner type="section" message="Lorem ipsum dolor sit amet." section-type="info" title="Lorem ipsum"/>
      <hr/>
      <mh-banner type="section" message="Lorem ipsum dolor sit amet." section-type="hint" title="Lorem ipsum"/>
      <hr/>
      <mh-banner type="section" message="Lorem ipsum dolor sit amet." section-type="error" title="Lorem ipsum"/>
      <hr/>
      <h1>Banner Section Text + Close</h1>
      <mh-banner type="section" message="Lorem ipsum dolor sit amet." >
      <mh-button type="iconic" icon="system-close" size="small" />
      </mh-banner>
      <hr/>
      <h1>Banner Full-Width Error</h1>
      <mh-banner type="fullWidth" banner-type="error" title="Title" message="Lorem ipsum">
      <mh-button
      type="primary"
      color="red"
      >primary</mh-button
    >
    <mh-button
      type="secondary"
      color="red"
      >secondary</mh-button
    >
			</mh-banner>
      <hr/>
      <h1>Banner Full-Width Gift</h1>
      <mh-banner type="fullWidth" banner-type="gift" title="Title" message="Lorem ipsum">
      <mh-button
      type="primary"
      color="green"
      >primary</mh-button
    >
    <mh-button
      type="secondary"
      color="green"
      >secondary</mh-button
    >
			</mh-banner>
      <hr/>
  </div>

    `,
}));
