import { storiesOf } from "@storybook/vue3";
import { defineAsyncComponent } from "vue";

storiesOf("RichTextEditor", module).add("All", () => ({
    components: {
        MhTextEditor: defineAsyncComponent({
            loader: () =>
                import ("../src/richtext-editor/src/index.vue"),
        }),
    },
    data() {
        return {
            text1: "<p><b>Gandalf</b> the grey</p>",
            text2: "",
            text3: "",
            text4: "this is disabled!",
            toolbar: "undo redo | casechange blocks | bold italic backcolor forecolor link image superscript subscript | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlst outdent indent table charmap fullscreen | removeformat | a11ycheck code help",
        };
    },
    template: `
      <h1>Default</h1>
	  		<mh-text-editor elementRef="text1" v-model="text1" placeholder="Placeholder" label="Lorem ipsum" :max-word-count="100" />
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