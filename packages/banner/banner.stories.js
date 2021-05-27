import { storiesOf } from "@storybook/vue3";
import Banner from "./index";
import "../../assets/storybook/banner.css";

storiesOf("Banner", module).add("Banner!", () => ({
  components: { Banner },
  template: `
  <div class="banner-wrapper">
      <h1>Banner Section Text</h1>
      <Banner type="section" text="Lorem ipsum dolor sit amet."/>
      <br/>
      <h1>Banner Section Text + Button</h1>
      <Banner type="section" text="Lorem ipsum dolor sit amet." button="custom" customText="Button"/>
      <br/>
      <h1>Banner Section Text + Close</h1>
      <Banner type="section" text="Lorem ipsum dolor sit amet." button="close" />
      <br/>
      <h1>Banner Full-Width Warning</h1>
      <Banner type="fullWidth" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae faucibus enim.
      Aliquam eget diam in purus viverra luctus sed at nisi." bannerType="warning" />
      <br/>
      <h1>Banner Full-Width Success</h1>
      <Banner type="fullWidth" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae faucibus enim.
      Aliquam eget diam in purus viverra luctus sed at nisi." bannerType="success" />
      <br/> <br/>
  </div>
      
    `,
}));

    