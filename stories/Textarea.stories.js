import { storiesOf } from "@storybook/vue3";
import MhTextArea from "../src/textarea/index";

import "./storybook.scss";

storiesOf("TextArea", module).add("All", () => ({
    data() {
        return {
            text1: null,
        };
    },
    components: { MhTextArea },
    template: `
  <div class="storybook">

      <h1>Default</h1>
      <mh-text-area 
        v-model="text1" 
        placeholder="Placeholder" 
        :rows="10"
        title="Title"
        tooltip="Lorem ipsum"
      />
      <hr/>
      {{ text1 }}
      <h1> Error </h1>
      <mh-text-area 
        v-model="text1" 
        placeholder="Placeholder" 
        error-message="this field is required"
        has-error  
      
    />
    <hr/>
      <h1>Disabled</h1>
      <mh-text-area 
        v-model="text1" 
        placeholder="Placeholder"
        disabled      
      />
  </div>
      
      
    `,
}));