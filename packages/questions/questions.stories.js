import { storiesOf } from "@storybook/vue3";
import Questions from "./index";

storiesOf("Questions", module).add("Questions!", () => ({
    components: { Questions },
    data() {
        return {
            errors: {
                1463: "this field is required",
                1464: "this field is required",
                1465: "this field is required",
                1466: "this field is required",
                1467: "this field is required",
                1468: "this field is required",
                1469: "this field is required",
                1470: "this field is required",
                1471: "this field is required",
                1472: "this field is required",
                1231: "this field is required",
                1473: "this field is required",
            },
            questions: [{
                    id: 1463,
                    value: "This is value!",
                    type: "text",
                    required: true,
                    label: "Name Title",
                    information: "Information",
                    textTransform: "capitalize",
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 1,
                },
                {
                    id: 1464,
                    value: "5334324343",
                    type: "tel",
                    required: false,
                    label: "Mobile Phone",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 2,
                },
                {
                    id: 1465,
                    value: "This is value!",
                    type: "textarea",
                    required: false,
                    label: "Address Line",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 5,
                    textareaMinChar: 0,
                    textareaMaxChar: 99999,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 3,
                },
                {
                    id: 1466,
                    value: "TR",
                    type: "country",
                    required: false,
                    label: "Country",
                    information: "",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 4,
                },
                {
                    id: 1467,
                    value: "",
                    type: "information",
                    required: false,
                    label: "hey!!",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: "info",
                    order: 5,
                },
                {
                    id: 1468,
                    value: "name@gmail.com",
                    type: "email",
                    required: false,
                    label: "Email",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 6,
                },
                {
                    id: 1469,
                    value: "",
                    type: "file",
                    required: false,
                    label: "File Upload",
                    information: "",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: true,
                    fileAcceptText: true,
                    fileAcceptSpreadsheet: true,
                    fileAcceptPresentation: true,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 7,
                },
                {
                    id: 1470,
                    value: [],
                    type: "checkbox",
                    required: false,
                    label: "Multiple Choice Question",
                    information: "",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 8,
                    eventFormFieldOptions: [{
                            id: 8771,
                            value: "",
                            label: "ODTU",
                            checked: true,
                            order: 1,
                            eventFormFields: [],
                        },
                        {
                            id: 8772,
                            value: "",
                            label: "Bilkent",
                            checked: false,
                            order: 2,
                            eventFormFields: [],
                        },
                    ],
                },
                {
                    id: 1471,
                    value: "",
                    type: "radio",
                    required: false,
                    label: "Single Choice Question",
                    information: "",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 9,
                    eventFormFieldOptions: [{
                            id: 8773,
                            value: "",
                            label: "Option 1",
                            checked: false,
                            order: 1,
                            eventFormFields: [],
                        },
                        {
                            id: 8774,
                            value: "",
                            label: "Option 2",
                            checked: false,
                            order: 2,
                            eventFormFields: [],
                        },
                    ],
                },
                {
                    id: 1472,
                    value: "",
                    type: "select",
                    required: false,
                    label: "Dropdown Menu",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 10,
                    eventFormFieldOptions: [{
                            id: 8775,
                            value: "1",
                            label: "Option 1",
                            checked: false,
                            order: 1,
                            eventFormFields: [],
                        },
                        {
                            id: 8776,
                            value: "2",
                            label: "Option 2",
                            checked: false,
                            order: 2,
                            eventFormFields: [],
                        },
                    ],
                },
                {
                    id: 1231,
                    value: [],
                    type: "select",
                    required: false,
                    label: "Dropdown Menu",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: true,
                    informationIcon: null,
                    order: 10,
                    eventFormFieldOptions: [{
                            id: 1123,
                            value: "1",
                            label: "Option 1",
                            checked: false,
                            order: 1,
                            eventFormFields: [],
                        },
                        {
                            id: 4353,
                            value: "2",
                            label: "Option 2",
                            checked: false,
                            order: 2,
                            eventFormFields: [],
                        },
                    ],
                },
                {
                    id: 1473,
                    value: "",
                    type: "datepicker",
                    required: false,
                    label: "Date Picker",
                    information: "Information",
                    textTransform: null,
                    textMinChar: null,
                    textMaxChar: null,
                    textareaRows: 2,
                    textareaMinChar: null,
                    textareaMaxChar: null,
                    numberInitial: null,
                    numberMin: null,
                    numberMax: null,
                    numberStepCount: 5,
                    fileAcceptImage: false,
                    fileAcceptText: false,
                    fileAcceptSpreadsheet: false,
                    fileAcceptPresentation: false,
                    fileAcceptCompressed: false,
                    checkboxOtherOption: false,
                    radioOtherOption: false,
                    selectMultiple: false,
                    informationIcon: null,
                    order: 11,
                },
            ],
        };
    },
    template: `
      <questions v-model:questions="questions" :errors="errors" />

    `,
}));
