import { storiesOf } from "@storybook/vue3";

import MhIcon from "./icons/index";

import "../../assets/storybook/storybook.css";

storiesOf("Style", module).add("Style!", () => ({
    components: { MhIcon },
    template: `
    <h1>MeetingHand Base Style Library</h1>
    <ul>
			<li>assets/scss/colors.scss</li>
			<li>assets/scss/icons.scss</li>
			<li>assets/scss/reset.scss</li>
			<li>assets/scss/typography.scss</li>
			<li>assets/scss/variables.scss</li>
			<li>assets/scss/mixins.scss</li>
			<li>assets/scss/icons.scss</li>
			<li>assets/scss/ant.scss</li>
			<li>assets/scss/component/*</li>
			<li>assets/scss/ant/*</li>
		</ul>
    `,
}));

storiesOf("Style", module).add("icons", () => ({
    components: { MhIcon },
    template: `
    <div class="mh-style">
			<h1>Icons</h1>
			<mh-icon name="arrow-down" />
			<mh-icon name="arrow-up" />
			<mh-icon name="arrow-left" />
			<mh-icon name="arrow-right" />
			<mh-icon name="order-down" />
			<mh-icon name="order-up" />
			<mh-icon name="sub-right-arrow" />
			<mh-icon name="sub-left-arrow" />
			<mh-icon name="wait" />
			<mh-icon name="system-info" />
			<mh-icon name="system-help" />
			<mh-icon name="system-show" />
			<mh-icon name="system-hide" />
			<mh-icon name="system-location" />
			<mh-icon name="system-close" />
			<mh-icon name="system-search" />
			<mh-icon name="system-secure" />
			<mh-icon name="system-plus" />
			<mh-icon name="system-minus" />
			<mh-icon name="system-other-options" />
			<mh-icon name="system-drag-row" />
			<mh-icon name="system-products" />
			<mh-icon name="system-open-tab" />
			<mh-icon name="system-drag-page" />
			<mh-icon name="system-star" />
			<mh-icon name="system-star-outline" />
			<mh-icon name="system-item" />
			<mh-icon name="ui-time" />
			<mh-icon name="ui-add-calendar" />
			<mh-icon name="ui-hamburger-menu" />
			<mh-icon name="system-dummy" />
			<mh-icon name="system-status-success" />
			<mh-icon name="system-status-info" />
			<mh-icon name="system-status-hint" />
			<mh-icon name="system-notification-dot" />
			<mh-icon name="ui-edit" />
			<mh-icon name="ui-duplicate" />
			<mh-icon name="ui-download-file" />
			<mh-icon name="ui-credit-card" />
			<mh-icon name="ui-invoice" />
			<mh-icon name="ui-image-change" />
			<mh-icon name="ui-delete" />
			<mh-icon name="ui-remove-user" />
			<mh-icon name="ui-support" />
			<mh-icon name="ui-date" />
			<mh-icon name="ui-payment" />
			<mh-icon name="ui-venue" />
			<mh-icon name="ui-play" />
			<mh-icon name="ui-home" />
			<mh-icon name="ui-check" />
			<mh-icon name="ui-premium" />
			<mh-icon name="ui-type" />
			<mh-icon name="ui-upload-file" />
			<mh-icon name="ui-live-streaming" />
			<mh-icon name="ui-pre-record" />
			<mh-icon name="ui-send" />
			<mh-icon name="ui-message" />
			<mh-icon name="ui-message-outline" />
			<mh-icon name="ui-bell" />
			<mh-icon name="ui-speaker-off" />
			<mh-icon name="ui-speaker1" />
			<mh-icon name="ui-speaker0" />
			<mh-icon name="ui-speaker-none" />
			<mh-icon name="ui-speaker" />
			<mh-icon name="ui-inbox" />
			<mh-icon name="ui-connection" />
			<mh-icon name="ui-pause" />
			<mh-icon name="ui-session" />
			<mh-icon name="ui-mic-on" />
			<mh-icon name="ui-mic-off" />
			<mh-icon name="ui-camera-off" />
			<mh-icon name="ui-camera-on" />
			<mh-icon name="system-leave-meeting" />
			<mh-icon name="ui-full-screen" />
			<mh-icon name="ui-full-screen-zoom" />
			<mh-icon name="ui-resize-video" />
			<mh-icon name="ui-sponsor" />
			<mh-icon name="ui-emoji" />
			<mh-icon name="system-send-up" />
			<mh-icon name="system-like" />
			<mh-icon name="system-liked" />
			<mh-icon name="system-mail" />
			<mh-icon name="system-phone" />
			<mh-icon name="system-add-contact" />
			<mh-icon name="system-person" />
			<mh-icon name="system-slide" />
			<mh-icon name="system-settings" />
			<mh-icon name="system-attachment" />
			<mh-icon name="ui-dashboard" />
			<mh-icon name="ui-report" />
			<mh-icon name="ui-event-program" />
			<mh-icon name="ui-engagement" />
			<mh-icon name="editor-link" />
			<mh-icon name="editor-undo" />
			<mh-icon name="editor-image" />
			<mh-icon name="vm-youtube" />
			<mh-icon name="ui-coffee" />
			<mh-icon name="ui-clipboard" />
			<mh-icon name="system-mobile-phone" />
			<mh-icon name="share-screen" />
			<mh-icon name="system-group-chat" />
			<mh-icon name="system-poll" />

			<h1>Social</h1>
			<mh-icon name="social-google" />
			<mh-icon name="social-facebook" />
			<mh-icon name="social-linkedin" />
			<mh-icon name="social-twitter" />
			<h1>Mobile App </h1>
			<mh-icon name="mobile-app-venue" />
			<mh-icon name="mobile-app-registration" />
			<mh-icon name="mobile-app-attendees" />
			<mh-icon name="mobile-app-hotel" />
			<mh-icon name="mobile-app-workshop" />
			<mh-icon name="mobile-app-about-event" />
			<mh-icon name="mobile-app-app-store" />
			<mh-icon name="mobile-app-play-store" />
			<mh-icon name="mobile-app-box" />
			<h1>Status</h1>
			<mh-icon name="warning" />
			<mh-icon name="success" />
			<mh-icon name="claps" />
			<mh-icon name="ui-flag" />
			<h1>Package</h1>
			<mh-icon name="package-participant" />
			<mh-icon name="package-abstract" />
			<mh-icon name="package-virtual" />
			<mh-icon name="package-mobile" />
		</div>
    `,
}));
