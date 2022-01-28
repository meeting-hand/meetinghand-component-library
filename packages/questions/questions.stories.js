import { storiesOf } from "@storybook/vue3";
import Questions from "./index";
import QuestionData from "./example/questions";
import { useForm } from "vee-validate";

storiesOf("Questions", module).add("Questions!", () => ({
    components: { Questions },
    data() {
        return {
            questions: [...QuestionData],
        };
    },
    methods: {},
    template: `
		<questions v-model:questions="questions" dateFormat="EU" />
    `,
}));