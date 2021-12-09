import { storiesOf } from "@storybook/vue3";
import SubmissionPreview from "./index";

storiesOf("SubmissionPreview", module).add("SubmissionPreview!", () => ({
    components: { SubmissionPreview },
    data() {
        return {
            authors: [],
            body: [{ value: { name: 'File' } }],
            keywords: [],
            references: []
        };
    },
    template: `
      <SubmissionPreview type="textPreview" topic="Topdasdsajflajjklfafjlaiccc" title="Title" :authors="authors" :body="body" :keywords="keywords" :references="references"/>
      <br/>
      <SubmissionPreview type="filePreview" :body="body"/>
    `,
}));