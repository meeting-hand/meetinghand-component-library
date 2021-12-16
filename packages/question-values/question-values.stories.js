import { storiesOf } from "@storybook/vue3";
import QuestionValues from "./index";

storiesOf("QuestionValues", module).add("QuestionValues!", () => ({
  components: { QuestionValues },
  template: `
      <QuestionValues />
    `,
}));

    