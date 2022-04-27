import { storiesOf } from "@storybook/vue3";
import Questions from "../src/questions/index";
import QuestionData from "../src/questions/example/questions";

storiesOf("Questions", module).add("Questions!", () => ({
    components: { Questions },
    data() {
        return {
            questions: [...QuestionData],
            errors: {},
        };
    },
    methods: {},
    template: `
		<questions :errors="errors" v-model:questions="questions" dateFormat="EU" />
		{{ errors }}
    `,
}));