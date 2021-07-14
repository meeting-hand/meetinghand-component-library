import { storiesOf } from "@storybook/vue3";
import MhNotification from "./index";
import MHIcon from "@meetinghand/style/icons/index.vue";

import "../../assets/storybook/storybook.css";

storiesOf("Notification", module).add("All", () => ({
	components: { MHIcon, MhNotification },
	data() {
		return {
			notificationSuccessStatus: false,
			notificationSuccess: {
				type: "success title",
				description: "Lorem ipsum dolor sit amet.",
				duration: 0,
				placement: "topRight",
        message: "Title"
			},
			notificationErrorStatus: false,
			notificationError: {
				type: "error title",
				description: "Lorem ipsum dolor sit amet.",
				duration: 0,
				placement: "topRight",
        message: "Title"
			},
			notificationInfoStatus: false,
			notificationInfo: {
				type: "info",
				description: "Lorem ipsum dolor sit amet.",
				duration: 0,
				placement: "topRight",
        message: "message"
			},
			notificationHintStatus: false,
			notificationHint: {
				type: "hint",
				description: "Lorem ipsum dolor sit amet.",
				duration: 0,
				placement: "topRight",
        message: "message"
			},
		};
	},
	template: `
  <div class="storybook-notification">
      <mh-notification
      :placement="notificationSuccess.placement"
      :duration="notificationSuccess.duration"
      :description="notificationSuccess.description"
      :message="notificationSuccess.message"
      :type="notificationSuccess.type"
      v-if="notificationSuccessStatus"
      @close="notificationSuccessStatus = false"
      />
      <a @click="notificationSuccessStatus=true">Open Success</a>
      <h1>{{notificationSuccessStatus}}</h1>
      <hr />
      <mh-notification
      :placement="notificationError.placement"
      :duration="notificationError.duration"
      :description="notificationError.description"
      :message="notificationError.message"
      :type="notificationError.type"
      v-if="notificationErrorStatus"
      @close="notificationErrorStatus = false"
      />
      <a @click="notificationErrorStatus=true">Open Error</a>
      <h1>{{notificationErrorStatus}}</h1>
      <hr />
      <mh-notification
      :placement="notificationInfo.placement"
      :duration="notificationInfo.duration"
      :description="notificationInfo.description"
      :type="notificationInfo.type"
      v-if="notificationInfoStatus"
      @close="notificationInfoStatus = false"
      />
      <a @click="notificationInfoStatus=true">Open Info</a>
      <h1>{{notificationInfoStatus}}</h1>
      <hr />
      <mh-notification
      :placement="notificationHint.placement"
      :duration="notificationHint.duration"
      :description="notificationHint.description"
      :type="notificationHint.type"
      v-if="notificationHintStatus"
      @close="notificationHintStatus = false"
      />
      <a @click="notificationHintStatus=true">Open Hint</a>
      <h1>{{notificationHintStatus}}</h1>
      <hr />
    </div>
    `,
}));
