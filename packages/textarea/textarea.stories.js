import { storiesOf } from "@storybook/vue3";
import MhTextArea from "./index";

storiesOf("TextArea", module).add("All", () => ({
  data() {
    return {
      text1: "test"
    }
  },
  components: { MhTextArea },
  template: `
      <h1>Default</h1>
      <mh-text-area 
        v-model="text1" 
        placeholder="placeholder" 
        minRows= "5"
        maxRows= "7"
        title="Title"
        icon="system-info"
      />
      <br/> <br/>
      {{ text1 }}
      <h1> Error </h1>
      <mh-text-area 
        v-model="text1" 
        placeholder="placeholder" 
        error-message="this field is required"
        has-error  
      
    />
      <br/> <br/>
      <h1>Disabled</h1>
      <mh-text-area 
        v-model="text1" 
        placeholder="placeholder"
        disabled      
      />
      
      
    `,
}));

    