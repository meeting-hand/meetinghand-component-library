export default {
	modelValue: {
		type: [String, Number, Array, Date],
		default: null,
	},
	options: {
		type: Array as () => any[],
		default: [],
		validator: (_o: any) =>
			_o.every(
				(_i: any) => _i.hasOwnProperty("value") && _i.hasOwnProperty("label")
			),
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	searchable: {
		type: Boolean,
		default: false,
	},
	placeholder: {
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
	size: {
		type: String,
		default: "default",
		validator: (_v: string) => ["default", "small"].includes(_v),
	},
	id: {
		type: String,
		default: null,
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	emptyStateDescription: {
		type: String,
		default: "No data",
	},
	truncateLength: {
		type: Number,
		default: 16,
	},
};
