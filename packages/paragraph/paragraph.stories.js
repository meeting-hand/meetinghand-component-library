import { storiesOf } from "@storybook/vue3";
import MhParagraph from "./index";

storiesOf("Paragraph", module).add("All", () => ({
  data() {
    return {
      paragraph: {
        value:"",
        
      }
    }
  },
  components: { MhParagraph },
  template: `
      <h1>Default</h1>
      <mh-paragraph 
        v-model:value="paragraph.value" 
        placeholder="placeholder"      
      />
      <br/> <br/>
      <h1>Disabled</h1>
      <mh-paragraph 
      v-model:value="paragraph.value" 
      placeholder="placeholder"
      disabled
    />
      <h1>{{paragraph.value}}</h1>
    `,
}));

    