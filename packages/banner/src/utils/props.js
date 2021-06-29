export default {
    type: {
        type: String,
        default: "section",
        validator: (_v) => ["section", "fullWidth"].includes(_v),
      },
      button: {
        type: String,
        default: null,
        validator: (_v) => [null, "custom", "close"].includes(_v),
      },
      text: {
        type: String,
        default: "",
      },
      bannerType: {
        type: String,
        default: "warning",
        validator: (_v) => ["warning", "success"].includes(_v),
      },
      customText: {
        type: String,
        default: null,
      },
      sectionType: {
        type: String,
        default: "warning",
        validator: (_v) => ["warning", "success", "info", "error"].includes(_v),
      },
      title: {
        type: String,
      },
      primaryButtonColor: {
        type: String,
      },
      primaryButtonText: {
        type: String,
      },
      secondaryButtonColor: {
        type: String,
      },
      secondaryButtonText: {
        type: String,
      },
      icon: {
        type: String,
      },
}