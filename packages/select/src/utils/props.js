export default {
    modelValue: {
        type: [String, Number],
        default: null,
    },
    options: {
        type: Array,
        default: () => [],
        validator: (_o) =>
            _o.every(
                (_i) => _i.hasOwnProperty("value") && _i.hasOwnProperty("label")
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
        validator: (_v) => ["default", "small"].includes(_v),
    },
    id: {
        type: String,
        default: null,
    },
};
