import { storiesOf } from "@storybook/vue3";
import MhTextEditor from "./index";

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
                //"table",
                { align: "left" },
                { align: "center" },
                { align: "right" },
                { list: "ordered" },
                { list: "bullet" },
                "code-block",
                // { script: "sub" },
                // { script: "super" },
            ],
        };
    },
    template: `
      <h1>Default</h1>
	  <mh-text-editor v-model="text1" placeholder="Placeholder" label="Lorem ipsum"/>
      <br /><br />
	  <h1>Default with word counter</h1>

      <mh-text-editor v-model="text2" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15" />
      <br /><br />
      <p>{{text2}}</p>
      <hr />
      <h1>Error</h1>
      <mh-text-editor v-model="text3" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15" has-error error-message="this field is required"/>
      <hr />
      <h1>Disabled</h1>
      <mh-text-editor v-model="text4" placeholder="Placeholder" :toolbar="toolbar" :readOnly="true"/>

    `,
}));

// data() {
// 	return {
// 		text1: "",
// 		toolbar: [
// 			"undo",
// 			"redo",
// 			"bold",
// 			"italic",
// 			"underline",
// 			"strike",
// 			"blockquote",
// 			"link",
// 			"image",
// 			"table",
// 			{ align: "left" },
// 			{ align: "center" },
// 			{ align: "right" },
// 			{ list: "ordered" },
// 			{ list: "bullet" },
// 			"code-block",
// 			{ script: "sub" },
// 			{ script: "super" },
// 		],
// 	};
// },