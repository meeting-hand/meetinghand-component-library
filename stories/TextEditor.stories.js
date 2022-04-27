import { storiesOf } from "@storybook/vue3";
import MhTextEditor from "../src/text-editor/index";

storiesOf("TextEditor", module).add("All", () => ({
    components: { MhTextEditor },
    data() {
        return {
            text1: "<p><b>Gandalf</b> the grey</p>",
            text2: "",
            text3: "",
            text4: "",
            toolbar: [
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "link",
                "image",
                { align: "left" },
                { align: "center" },
                { align: "right" },
                { list: "ordered" },
                { list: "bullet" },
                "code-block",
                { script: "sub" },
                { script: "super" },
                { header: [1, 2, 3, 4, 5, 6, false] },
                {
                    color: [
                        "#3FA0B5",
                        "#2A535D",
                        "#0EAD88",
                        "#3F51B5",
                        "#FF9800",
                        "#4CAF50",
                        "#FFC700",
                        "#C336F4",
                        "#9C27B0",
                        "#6421F3",
                        "#00D1FF",
                        "#F44336",
                    ],
                },
                {
                    background: [
                        "#3FA0B5",
                        "#2A535D",
                        "#0EAD88",
                        "#3F51B5",
                        "#FF9800",
                        "#4CAF50",
                        "#FFC700",
                        "#C336F4",
                        "#9C27B0",
                        "#6421F3",
                        "#00D1FF",
                        "#F44336",
                    ],
                },
            ],
        };
    },
    template: `
      <h1>Default</h1>
	  		<mh-text-editor elementRef="text1" v-model="text1" placeholder="Placeholder" label="Lorem ipsum" />
      	<br /><br />
				{{ text1 }}

			<h1>Default with word counter</h1>
      	<mh-text-editor elementRef="text2" v-model="text2" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15" />
      	<br /><br />
      	<p>{{text2}}</p>
      <hr />
      <h1>Error</h1>
      <mh-text-editor elementRef="text3" v-model="text3" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15" has-error error-message="this field is required"/>
      <hr />
      <h1>Disabled</h1>
      <mh-text-editor elementRef="text4" v-model="text4" placeholder="Placeholder" :toolbar="toolbar" :readOnly="true"/>

    `,
}));