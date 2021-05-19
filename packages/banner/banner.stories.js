import { storiesOf } from "@storybook/vue3";
import Banner from "./index";

storiesOf("Banner", module).add("Banner!", () => ({
  components: { Banner },
  template: `
      <Banner type="section" text="Lorem"/>
      <Banner type="section" button="custom"/>
      <Banner type="section" button="close"/>
      
      
    `,
}));

    