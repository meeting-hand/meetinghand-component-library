import { storiesOf } from "@storybook/vue3";
import MhTextEditor from "./index";

storiesOf("TextEditor", module).add("All", () => ({
	components: { MhTextEditor},
	data() {
	return {
		text1: "",
		toolbar: [
			"undo",
			"redo",
			"bold",
			"italic",
			"underline",
			"strike",
			"blockquote",
			"link",
			"image",
			"table",
			{ align: "left" },
			{ align: "center" },
			{ align: "right" },
			{ list: "ordered" },
			{ list: "bullet" },
			"code-block",
			{ script: "sub" },
			{ script: "super" },
			
		],
	};
},
	template: `
      <h1>Default</h1>
      <mh-text-editor v-model="text1" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15" />
      <br /><br />
      <p>{{text1}}</p>
      <hr />
      <h1>Error</h1>
      <mh-text-editor v-model="text1" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15" has-error error-message="this field is required"/>
      <hr />
      <h1>Disabled</h1>
      <mh-text-editor v-model="text1" placeholder="Placeholder" :toolbar="toolbar" :max-word-count="15"  :readOnly="true"/>

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