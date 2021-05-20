<template>
  <component :is="name" class="mh-icon"></component>
</template>
<script>
import ArrowDown from "./arrowDown";
import ArrowUp from "./arrowUp";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";
import ChevronLeft from "./chevronLeft";
import ChevronDown from "./chevronDown";
import ChevronRight from "./chevronRight";
import ChevronUp from "./chevronUp";
import OrderDown from "./orderDown";
import OrderUp from "./orderUp";
import SubRightArrow from "./subRightArrow";
import SubLeftArrow from "./subLeftArrow";
import Wait from "./wait";
import SystemInfo from "./systemInfo";
import SystemHelp from "./systemHelp";
import SystemShow from "./systemShow";
import SystemHide from "./systemHide";
import SystemLocation from "./systemLocation";
import SystemClose from "./systemClose";
import SystemSearch from "./systemSearch";
import SystemSecure from "./systemSecure";
import SystemPlus from "./systemPlus";
import SystemMinus from "./systemMinus";
import SystemOtherOptions from "./systemOtherOptions";
import SystemDragRow from "./systemDragRow";
import SystemProducts from "./systemProducts";
import SystemOpenTab from "./systemOpenTab";
import SystemDragPage from "./systemDragPage";
import SystemStar from "./systemStar";
import SystemStarOutline from "./systemStarOutline";
import SystemItem from "./systemItem";
import UiTime from "./uiTime";
import UiAddCalendar from "./uiAddCalendar";
import UiHamburgerMenu from "./uiHamburgerMenu";
import SystemDummy from "./systemDummy";
import SystemStatusSuccess from "./systemStatusSuccess";
import SystemStatusError from "./systemStatusError";
import SystemStatusInfo from "./systemStatusInfo";
import SystemStatusHint from "./systemStatusHint";
import SystemNotificationDot from "./systemNotificationDot";
import UiEdit from "./uiEdit";
import UiDuplicate from "./uiDuplicate";
import UiDownloadFile from "./uiDownloadFile";
import UiCreditCard from "./uiCreditCard";
import UiInvoice from "./uiInvoice";
import UiImageChange from "./uiImageChange";
import UiDelete from "./uiDelete";
import UiRemoveUser from "./uiRemoveUser";
import UiSupport from "./uiSupport";
import UiDate from "./uiDate";
import UiPayment from "./uiPayment";
import UiVenue from "./uiVenue";
import UiPlay from "./uiPlay";
import UiHome from "./uiHome";
import UiCheck from "./uiCheck";
import UiPremium from "./uiPremium";
import UiType from "./uiType";
import UiUploadFile from "./uiUploadFile";
import UiLiveStreaming from "./uiLiveStreaming";
import UiPreRecord from "./uiPreRecord";
import UiSend from "./uiSend";
import UiMessage from "./uiMessage";
import UiMessageOutline from "./uiMessageOutline";
import UiBell from "./uiBell";
import UiSpeakerOff from "./uiSpeakerOff";
import UiSpeaker1 from "./uiSpeaker1";
import UiSpeaker0 from "./uiSpeaker0";
import UiSpeakerNone from "./uiSpeakerNone";
import UiSpeaker from "./uiSpeaker";
import UiInbox from "./uiInbox";
import UiConnection from "./uiConnection";
import UiPause from "./uiPause";
import UiSession from "./uiSession";
import UiMicOn from "./uiMicOn";
import UiMicOff from "./uiMicOff";
import UiCameraOff from "./uiCameraOff";
import UiCameraOn from "./uiCameraOn";
import SystemLeaveMeeting from "./systemLeaveMeeting";
import UiFullScreen from "./uiFullScreen";
import UiFullScreenZoom from "./uiFullScreenZoom";
import UiResizeVideo from "./uiResizeVideo";
import UiSponsor from "./uiSponsor";
import UiEmoji from "./uiEmoji";
import SystemSendUp from "./systemSendUp";
import SystemLike from "./systemLike";
import SystemLiked from "./systemLiked";
import SystemMail from "./systemMail";
import SystemPhone from "./systemPhone";
import SystemAddContact from "./systemAddContact";
import SystemPerson from "./systemPerson";
import SystemSlide from "./systemSlide";
import SystemSettings from "./systemSettings";
import SocialGoogle from "./socialGoogle";
import SocialFaceBook from "./socialFaceBook";
import SocialLinkedin from "./socialLinkedin";
import SocialTwitter from "./socialTwitter";
import MobileAppVenue from "./mobileAppVenue";
import MobileAppRegistration from "./mobileAppRegistration";
import MobileAppAttendees from "./mobileAppAttendees";
import MobileAppHotel from "./mobileAppHotel";
import MobileAppWorkshop from "./mobileAppWorkshop";
import MobileAppAboutEvent from "./mobileAppAboutEvent";
import MobileAppAppStore from "./mobileAppAppStore";
import MobileAppPlayStore from "./mobileAppPlayStore";
import MobileAppBox from "./mobileAppBox";
import Warning from "./warning";
import Success from "./success";
import Claps from "./claps";

const iconList = [
  "arrow-down",
  "arrow-up",
  "arrow-left",
  "arrow-right",
  "chevron-left",
  "chevron-down",
  "chevron-right",
  "chevron-up",
  "order-down",
  "order-up",
  "sub-right-arrow",
  "sub-left-arrow",
  "wait",
  "system-info",
  "system-help",
  "system-show",
  "system-hide",
  "system-location",
  "system-close",
  "system-search",
  "system-secure",
  "system-plus",
  "system-minus",
  "system-other-options",
  "system-drag-row",
  "system-products",
  "system-open-tab",
  "system-drag-page",
  "system-star",
  "system-star-outline",
  "system-item",
  "ui-time",
  "ui-add-calendar",
  "ui-hamburger-menu",
  "system-dummy",
  "system-status-success",
  "system-status-error",
  "system-status-info",
  "system-status-hint",
  "system-notification-dot",
  "ui-edit",
  "ui-duplicate",
  "ui-download-file",
  "ui-credit-card",
  "ui-invoice",
  "ui-image-change",
  "ui-delete",
  "ui-remove-user",
  "ui-support",
  "ui-date",
  "ui-payment",
  "ui-venue",
  "ui-play",
  "ui-home",
  "ui-check",
  "ui-premium",
  "ui-type",
  "ui-upload-file",
  "ui-live-streaming",
  "ui-pre-record",
  "ui-send",
  "ui-message",
  "ui-message-outline",
  "ui-bell",
  "ui-speaker-off",
  "ui-speaker1",
  "ui-speaker0",
  "ui-speaker-none",
  "ui-speaker",
  "ui-inbox",
  "ui-connection",
  "ui-pause",
  "ui-session",
  "ui-mic-on",
  "ui-mic-off",
  "ui-camera-off",
  "ui-camera-on",
  "system-leave-meeting",
  "ui-full-screen",
  "ui-full-screen-zoom",
  "ui-resize-video",
  "ui-sponsor",
  "ui-emoji",
  "system-send-up",
  "system-like",
  "system-liked",
  "system-mail",
  "system-phone",
  "system-add-contact",
  "system-person",
  "system-slide",
  "system-settings",
  "social-google",
  "social-face-book",
  "social-linkedin",
  "social-twitter",
  "mobile-app-venue",
  "mobile-app-registration",
  "mobile-app-attendees",
  "mobile-app-hotel",
  "mobile-app-workshop",
  "mobile-app-about-event",
  "mobile-app-app-store",
  "mobile-app-play-store",
  "mobile-app-box",
  "warning",
  "success",
  "claps",
];

export default {
  components: {
    ArrowDown,
    ArrowUp,
    ArrowLeft,
    ArrowRight,
    ChevronLeft,
    ChevronDown,
    ChevronRight,
    ChevronUp,
    OrderDown,
    OrderUp,
    SubRightArrow,
    SubLeftArrow,
    Wait,
    SystemInfo,
    SystemHelp,
    SystemShow,
    SystemHide,
    SystemLocation,
    SystemClose,
    SystemSearch,
    SystemSecure,
    SystemPlus,
    SystemMinus,
    SystemOtherOptions,
    SystemDragRow,
    SystemProducts,
    SystemOpenTab,
    SystemDragPage,
    SystemStar,
    SystemStarOutline,
    SystemItem,
    UiTime,
    UiAddCalendar,
    UiHamburgerMenu,
    SystemDummy,
    SystemStatusSuccess,
    SystemStatusError,
    SystemStatusInfo,
    SystemStatusHint,
    SystemNotificationDot,
    UiEdit,
    UiDuplicate,
    UiDownloadFile,
    UiCreditCard,
    UiInvoice,
    UiImageChange,
    UiDelete,
    UiRemoveUser,
    UiSupport,
    UiDate,
    UiPayment,
    UiVenue,
    UiPlay,
    UiHome,
    UiCheck,
    UiPremium,
    UiType,
    UiUploadFile,
    UiLiveStreaming,
    UiPreRecord,
    UiSend,
    UiMessage,
    UiMessageOutline,
    UiBell,
    UiSpeakerOff,
    UiSpeaker1,
    UiSpeaker0,
    UiSpeakerNone,
    UiSpeaker,
    UiInbox,
    UiConnection,
    UiPause,
    UiSession,
    UiMicOn,
    UiMicOff,
    UiCameraOff,
    UiCameraOn,
    SystemLeaveMeeting,
    UiFullScreen,
    UiFullScreenZoom,
    UiResizeVideo,
    UiSponsor,
    UiEmoji,
    SystemSendUp,
    SystemLike,
    SystemLiked,
    SystemMail,
    SystemPhone,
    SystemAddContact,
    SystemPerson,
    SystemSlide,
    SystemSettings,
    SocialGoogle,
    SocialFaceBook,
    SocialLinkedin,
    SocialTwitter,
    MobileAppVenue,
    MobileAppRegistration,
    MobileAppAttendees,
    MobileAppHotel,
    MobileAppWorkshop,
    MobileAppAboutEvent,
    MobileAppAppStore,
    MobileAppPlayStore,
    MobileAppBox,
    Warning,
    Success,
    Claps,
  },
  props: {
    name: {
      type: String,
      required: true,
      validator: (_i) => iconList.includes(_i),
    },
  },
};
</script>
<style scoped>
svg {
  width: 12px;
  height: 14px;
}
</style>