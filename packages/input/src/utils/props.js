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
        default: null,
    },
    class: {
        type: String,
            default: null,
    },
    textTransform: {
        type: String,
        default: null,
        validator: (value) => ["capitalize", "uppercase"].includes(value),
    },
};
