export default {
	type: {
		type: String,
		default: "section",
		validator: (_v) => ["section", "fullWidth"].includes(_v),
	},
	bannerType: {
		type: String,
		default: "warning",
		validator: (_v) => ["warning", "success", "info"].includes(_v),
	},
	sectionType: {
		type: String,
		default: "warning",
		validator: (_v) => ["warning", "success", "info", "error"].includes(_v),
	},
	title: {
		type: String,
	},
	icon: {
		type: String,
	},
	message: {
		type: String,
	},
};
