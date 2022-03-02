export default {
	type: {
		type: String,
		default: "section",
		validator: (_v) => ["section", "fullWidth"].includes(_v),
	},
	bannerType: {
		type: String,
		default: "error",
		validator: (_v) => ["error", "success", "info", "gift"].includes(_v),
	},
	sectionType: {
		type: String,
		default: "hint",
		validator: (_v) => ["hint", "success", "info", "error"].includes(_v),
	},
	title: {
		type: String,
	},
	message: {
		type: String,
	},
};
