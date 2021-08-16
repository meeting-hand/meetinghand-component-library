<template>
  <component :is="name" :class="['mh-icon', `mh-icon-${name}`]"></component>
</template>
<script>
import ArrowDown from "./arrowDown.vue";
import ArrowUp from "./arrowUp.vue";
import ArrowLeft from "./arrowLeft.vue";
import ArrowRight from "./arrowRight.vue";
import ChevronLeft from "./chevronLeft.vue";
import ChevronDown from "./chevronDown.vue";
import ChevronRight from "./chevronRight.vue";
import ChevronUp from "./chevronUp.vue";
import OrderDown from "./orderDown.vue";
import OrderUp from "./orderUp.vue";
import SubRightArrow from "./subRightArrow.vue";
import SubLeftArrow from "./subLeftArrow.vue";
import Wait from "./wait.vue";
import SystemInfo from "./systemInfo.vue";
import SystemHelp from "./systemHelp.vue";
import SystemShow from "./systemShow.vue";
import SystemHide from "./systemHide.vue";
import SystemLocation from "./systemLocation.vue";
import SystemClose from "./systemClose.vue";
import SystemSearch from "./systemSearch.vue";
import SystemSecure from "./systemSecure.vue";
import SystemPlus from "./systemPlus.vue";
import SystemMinus from "./systemMinus.vue";
import SystemOtherOptions from "./systemOtherOptions.vue";
import SystemDragRow from "./systemDragRow.vue";
import SystemProducts from "./systemProducts.vue";
import SystemOpenTab from "./systemOpenTab.vue";
import SystemDragPage from "./systemDragPage.vue";
import SystemStar from "./systemStar.vue";
import SystemStarOutline from "./systemStarOutline.vue";
import SystemItem from "./systemItem.vue";
import UiTime from "./uiTime.vue";
import UiAddCalendar from "./uiAddCalendar.vue";
import UiHamburgerMenu from "./uiHamburgerMenu.vue";
import SystemDummy from "./systemDummy.vue";
import SystemStatusSuccess from "./systemStatusSuccess.vue";
import SystemStatusError from "./systemStatusError.vue";
import SystemStatusInfo from "./systemStatusInfo.vue";
import SystemStatusHint from "./systemStatusHint.vue";
import SystemNotificationDot from "./systemNotificationDot.vue";
import UiEdit from "./uiEdit.vue";
import UiDuplicate from "./uiDuplicate.vue";
import UiDownloadFile from "./uiDownloadFile.vue";
import UiCreditCard from "./uiCreditCard.vue";
import UiInvoice from "./uiInvoice.vue";
import UiImageChange from "./uiImageChange.vue";
import UiDelete from "./uiDelete.vue";
import UiRemoveUser from "./uiRemoveUser.vue";
import UiSupport from "./uiSupport.vue";
import UiDate from "./uiDate.vue";
import UiPayment from "./uiPayment.vue";
import UiVenue from "./uiVenue.vue";
import UiPlay from "./uiPlay.vue";
import UiHome from "./uiHome.vue";
import UiCheck from "./uiCheck.vue";
import UiPremium from "./uiPremium.vue";
import UiType from "./uiType.vue";
import UiUploadFile from "./uiUploadFile.vue";
import UiLiveStreaming from "./uiLiveStreaming.vue";
import UiPreRecord from "./uiPreRecord.vue";
import UiSend from "./uiSend.vue";
import UiMessage from "./uiMessage.vue";
import UiMessageOutline from "./uiMessageOutline.vue";
import UiBell from "./uiBell.vue";
import UiSpeakerOff from "./uiSpeakerOff.vue";
import UiSpeaker1 from "./uiSpeaker1.vue";
import UiSpeaker0 from "./uiSpeaker0.vue";
import UiSpeakerNone from "./uiSpeakerNone.vue";
import UiSpeaker from "./uiSpeaker.vue";
import UiInbox from "./uiInbox.vue";
import UiConnection from "./uiConnection.vue";
import UiPause from "./uiPause.vue";
import UiSession from "./uiSession.vue";
import UiMicOn from "./uiMicOn.vue";
import UiMicOff from "./uiMicOff.vue";
import UiCameraOff from "./uiCameraOff.vue";
import UiCameraOn from "./uiCameraOn.vue";
import SystemLeaveMeeting from "./systemLeaveMeeting.vue";
import UiFullScreen from "./uiFullScreen.vue";
import UiFullScreenZoom from "./uiFullScreenZoom.vue";
import UiResizeVideo from "./uiResizeVideo.vue";
import UiSponsor from "./uiSponsor.vue";
import UiEmoji from "./uiEmoji.vue";
import UiBuilding from "./uiBuilding.vue";
import UiCoffee from "./uiCoffee.vue";
import SystemAttachment from "./systemAttachment.vue";
import SystemSendUp from "./systemSendUp.vue";
import SystemLike from "./systemLike.vue";
import SystemLiked from "./systemLiked.vue";
import SystemMail from "./systemMail.vue";
import SystemPhone from "./systemPhone.vue";
import SystemAddContact from "./systemAddContact.vue";
import SystemPerson from "./systemPerson.vue";
import SystemSlide from "./systemSlide.vue";
import SystemSettings from "./systemSettings.vue";
import SocialGoogle from "./socialGoogle.vue";
import SocialFacebook from "./socialFacebook.vue";
import SocialLinkedin from "./socialLinkedin.vue";
import SocialTwitter from "./socialTwitter.vue";
import MobileAppVenue from "./mobileAppVenue.vue";
import MobileAppRegistration from "./mobileAppRegistration.vue";
import MobileAppAttendees from "./mobileAppAttendees.vue";
import MobileAppHotel from "./mobileAppHotel.vue";
import MobileAppWorkshop from "./mobileAppWorkshop.vue";
import MobileAppAboutEvent from "./mobileAppAboutEvent.vue";
import MobileAppAppStore from "./mobileAppAppStore.vue";
import MobileAppPlayStore from "./mobileAppPlayStore.vue";
import MobileAppBox from "./mobileAppBox.vue";
import Warning from "./warning.vue";
import Success from "./success.vue";
import Claps from "./claps.vue";
import SocialApple from "./socialApple.vue";
import UiGift from "./uiGift.vue";
import UiFlag from "./uiFlag.vue";
import UiDashboard from "./uiDashboard.vue";
import UiReport from "./uiReport.vue";
import UiEventProgram from "./uiEventProgram.vue";
import UiEngagement from "./uiEngagement.vue";
import PackageAbstract from "./packageAbstract.vue";
import PackageMobile from "./packageMobile.vue";
import PackageParticipant from "./packageParticipant.vue";
import PackageVirtual from "./packageVirtual.vue";
import EditorLink from "./editorLink.vue";
import EditorUndo from "./editorUndo.vue";
import Speakers from "./speakers.vue";
import EditorImage from "./editorImage.vue";
import VmYoutube from "./vmYoutube.vue";
import VmZoom from "./vmZoom.vue";
import VmVimeo from "./vmVimeo.vue";
import VmGoogleMeet from "./vmGoogleMeet.vue";
import UiClipboard from "./uiClipboard.vue";
import SystemMobilePhone from "./systemMobilePhone.vue";

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
  "ui-building",
  "ui-coffee",
  "ui-dashboard",
  "ui-report",
  "ui-event-program",
  "ui-engagement",
  "system-attachment",
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
  "social-facebook",
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
  "social-apple",
  "ui-gift",
  "ui-flag",
  "package-abstract",
  "package-mobile",
  "package-participant",
  "package-virtual",
  "editor-link",
  "editor-undo",
  "speakers",
  "editor-image",
  "vm-youtube",
  "vm-zoom",
  "vm-vimeo",
  "vm-google-meet",
  "ui-clipboard",
  "system-mobile-phone",
];

export default {
  name: "MhIcon",
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
    UiBuilding,
    UiCoffee,
    UiDashboard,
    UiReport,
    UiEventProgram,
    UiEngagement,
    SystemAttachment,
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
    SocialFacebook,
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
    SocialApple,
    UiGift,
    UiFlag,
    PackageAbstract,
    PackageMobile,
    PackageParticipant,
    PackageVirtual,
    EditorLink,
    EditorUndo,
    Speakers,
    EditorImage,
    VmYoutube,
    VmZoom,
    VmVimeo,
    VmGoogleMeet,
    UiClipboard,
    SystemMobilePhone,
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
