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
			<div style="margin-top: 20px">
			<button @click="status=true">start</button>
			<button @click="status=false">stop</button>
			</div>
    `,
}));