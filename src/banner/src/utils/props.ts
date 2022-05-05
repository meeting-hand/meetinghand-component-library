export default {
	type: {
		type: String,
		default: "section",
		validator: (_v: string) => ["section", "fullWidth"].includes(_v),
	},
	bannerType: {
		type: String,
		default: "error",
		validator: (_v: string) => ["error", "success", "info", "gift"].includes(_v),
	},
	sectionType: {
		type: String,
		default: "hint",
		validator: (_v: string) => ["hint", "success", "info", "error"].includes(_v),
	},
	title: {
		type: String,
	},
	message: {
		type: String,
	},
};
