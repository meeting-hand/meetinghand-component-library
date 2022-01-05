import { storiesOf } from "@storybook/vue3";
import ProgressBar from "./index";

storiesOf("ProgressBar", module).add("ProgressBar", () => ({
    data: () => {
        return {
            status: true,
        };
    },
    components: { ProgressBar },
    template: `
      <progress-bar :status="status" style="margin-top: 20px" />
    `,
}));