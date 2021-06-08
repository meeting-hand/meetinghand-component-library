export default {
	modelValue: {
		type: String,
		default: "",
	},
	hasError: {
		type: Boolean,
		default: false,
	},
	errorMessage: {
		type: String,
		default: null,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	placeholder: {
		type: String,
		default: "",
	},
	leftIcon: {
		type: String,
		default: null,
	},
	rightIcon: {
		type: String,
		default: null,
	},
	allowClear: {
		type: Boolean,
		default: false,
	},
	email: {
		type: Boolean,
		default: false,
	},
	id: {
		type: String,
		default: "_" + Math.random().toString(36).substr(2, 9),
	},
};
