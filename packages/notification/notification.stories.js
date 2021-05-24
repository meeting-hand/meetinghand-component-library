import { storiesOf } from "@storybook/vue3";
import MhNotification from "./index";
import MHIcon from "@meetinghand/style/icons/index";

storiesOf("Notification", module).add("All", () => ({
  components: { MHIcon, MhNotification },
  data(){
    return {
      notificationStatus: false,
      notification: {
        type: "success",
        description: "Lorem ipsum dolor sit amet.",
        title: "Title",
        icon: "status-success",
        duration: "0",
        placement: "topRight",
      }
    }
  },
  template: `
      <mh-notification 
      :placement="notification.placement"
      :duration="notification.duration"
      :icon="notification.icon" 
      :description="notification.description" 
      :title="notification.title" 
      :type="notification.type" 
      v-model="notificationStatus"
      v-if="notificationStatus" 
      />
      <a @click="notificationStatus=true">Open Success</a>
      <h1>{{notificationStatus}}</h1>
      <h1>{{notification.icon}}</h1>
      
    `,
}));

    