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
      <propgress-bar :status="status" />
    `,
}));