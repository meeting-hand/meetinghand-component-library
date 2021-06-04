import { storiesOf } from "@storybook/vue3";
import MhNotification from "./index";
import MHIcon from "@meetinghand/style/icons/index.vue";

storiesOf("Notification", module).add("All", () => ({
	components: { MHIcon, MhNotification },
	data() {
		return {
			notificationSuccessStatus: false,
			notificationSuccess: {
				type: "success",
				description: "Lorem ipsum dolor sit amet.",
				title: "Title",
				duration: 0,
				placement: "bottomRight",
			},
			notificationErrorStatus: false,
			notificationError: {
				type: "error",
				description: "Lorem ipsum dolor sit amet.",
				title: "Title",
				duration: 0,
				placement: "bottomRight",
			},
			notificationInfoStatus: false,
			notificationInfo: {
				type: "info",
				description: "Lorem ipsum dolor sit amet.",
				title: "Title",
				duration: 0,
				placement: "bottomRight",
			},
			notificationHintStatus: false,
			notificationHint: {
				type: "hint",
				description: "Lorem ipsum dolor sit amet.",
				title: "Title",
				duration: 0,
				placement: "bottomRight",
			},
		};
	},
	template: `
      <mh-notification
      :placement="notificationSuccess.placement"
      :duration="notificationSuccess.duration"
      :description="notificationSuccess.description"
      :title="notificationSuccess.title"
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
      :title="notificationError.title"
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
      :title="notificationInfo.title"
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
      :title="notificationHint.title"
      :type="notificationHint.type"
      v-if="notificationHintStatus"
      @close="notificationHintStatus = false"
      />
      <a @click="notificationHintStatus=true">Open Hint</a>
      <h1>{{notificationHintStatus}}</h1>
      <hr />
    `,
}));
