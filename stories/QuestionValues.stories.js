import { storiesOf } from "@storybook/vue3";
import QuestionValues from "../src/question-values";

storiesOf("QuestionValues", module).add("QuestionValues!", () => ({
    data() {
        return {
            questions: [{
                    id: 1759,
                    type: "checkbox",
                    label: "How did you find the submitted abstract text?",
                    value: [9134],
                },
                {
                    id: 1925,
                    type: "text",
                    label: "Yorum ekle",
                    value: "yorun 1",
                },
                {
                    id: 1926,
                    type: "radio",
                    label: "Single Choice Question",
                    value: 9272,
                },
            ],
            // questionSetupData: [{
            //         id: 1814,
            //         type: "radio",
            //         required: false,
            //         label: "Single Choice Question",
            //         information: "",
            //         textTransform: null,
            //         textMinChar: null,
            //         textMaxChar: null,
            //         textareaRows: 2,
            //         textareaMinChar: null,
            //         textareaMaxChar: null,
            //         numberInitial: null,
            //         numberMin: null,
            //         numberMax: null,
            //         numberStepCount: 5,
            //         fileAcceptImage: false,
            //         fileAcceptText: false,
            //         fileAcceptSpreadsheet: false,
            //         fileAcceptPresentation: false,
            //         fileAcceptCompressed: false,
            //         radioOtherOption: true,
            //         informationIcon: "info",
            //         order: 1,
            //         fieldableId: [143, 144],
            //         eventFormFieldOptions: [{
            //                 id: 9184,
            //                 label: "Option 1",
            //                 checked: false,
            //                 order: 1,
            //                 eventFormFields: [],
            //             },
            //             {
            //                 id: 9185,
            //                 label: "Option 2",
            //                 checked: false,
            //                 order: 2,
            //                 eventFormFields: [],
            //             },
            //         ],
            //     },
            //     {
            //         id: 1821,
            //         type: "select",
            //         required: false,
            //         label: "Dropdown Menu",
            //         information: "",
            //         textTransform: null,
            //         textMinChar: null,
            //         textMaxChar: null,
            //         textareaRows: 2,
            //         textareaMinChar: null,
            //         textareaMaxChar: null,
            //         numberInitial: null,
            //         numberMin: null,
            //         numberMax: null,
            //         numberStepCount: 5,
            //         fileAcceptImage: false,
            //         fileAcceptText: false,
            //         fileAcceptSpreadsheet: false,
            //         fileAcceptPresentation: false,
            //         fileAcceptCompressed: false,
            //         radioOtherOption: false,
            //         informationIcon: null,
            //         order: 2,
            //         fieldableId: [143, 144, 264],
            //         eventFormFieldOptions: [{
            //                 id: 9188,
            //                 label: "Option 1",
            //                 checked: false,
            //                 order: 1,
            //                 eventFormFields: [],
            //             },
            //             {
            //                 id: 9189,
            //                 label: "Option 2",
            //                 checked: false,
            //                 order: 2,
            //                 eventFormFields: [],
            //             },
            //         ],
            //     },
            //     {
            //         id: 1824,
            //         type: "datepicker",
            //         required: true,
            //         label: "Date Picker",
            //         information: "",
            //         textTransform: null,
            //         textMinChar: null,
            //         textMaxChar: null,
            //         textareaRows: 2,
            //         textareaMinChar: null,
            //         textareaMaxChar: null,
            //         numberInitial: null,
            //         numberMin: null,
            //         numberMax: null,
            //         numberStepCount: 5,
            //         fileAcceptImage: false,
            //         fileAcceptText: false,
            //         fileAcceptSpreadsheet: false,
            //         fileAcceptPresentation: false,
            //         fileAcceptCompressed: false,
            //         radioOtherOption: false,
            //         informationIcon: "info",
            //         order: 3,
            //         fieldableId: [143, 144, 264],
            //     },
            // ],
            questionSetupData: [{
                    id: 1759,
                    type: "checkbox",
                    required: true,
                    label: "How did you find the submitted abstract text?",
                    information: null,
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
                    radioOtherOption: false,
                    informationIcon: null,
                    order: 1,
                    fieldableId: null,
                    eventFormFieldOptions: [{
                            id: 9133,
                            label: "Good",
                            checked: true,
                            order: 1,
                            eventFormFields: [],
                        },
                        {
                            id: 9134,
                            label: "Horrible",
                            checked: false,
                            order: 2,
                            eventFormFields: [],
                        },
                    ],
                },
                {
                    id: 1925,
                    type: "text",
                    required: false,
                    label: "Yorum ekle",
                    information: null,
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
                    radioOtherOption: false,
                    informationIcon: null,
                    order: 2,
                    fieldableId: null,
                },
                {
                    id: 1926,
                    type: "radio",
                    required: false,
                    label: "Single Choice Question",
                    information: null,
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
                    radioOtherOption: false,
                    informationIcon: null,
                    order: 3,
                    fieldableId: null,
                    eventFormFieldOptions: [{
                            id: 9270,
                            label: "Option 1",
                            checked: false,
                            order: 1,
                            eventFormFields: [],
                        },
                        {
                            id: 9271,
                            label: "Option 2",
                            checked: false,
                            order: 2,
                            eventFormFields: [],
                        },
                        {
                            id: 9272,
                            label: "Option",
                            checked: false,
                            order: 3,
                            eventFormFields: [{
                                    id: 1927,
                                    type: "text",
                                    required: false,
                                    label: "Name Title",
                                    information: null,
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
                                    radioOtherOption: false,
                                    informationIcon: null,
                                    order: 1,
                                },
                                {
                                    id: 1928,
                                    type: "radio",
                                    required: false,
                                    label: "Single Choice Question",
                                    information: null,
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
                                    radioOtherOption: false,
                                    informationIcon: null,
                                    order: 2,
                                    eventFormFieldOptions: [{
                                            id: 9273,
                                            label: "Option 1",
                                            checked: false,
                                            order: 1,
                                            eventFormFields: [],
                                        },
                                        {
                                            id: 9274,
                                            label: "Option 2",
                                            checked: false,
                                            order: 2,
                                            eventFormFields: [{
                                                    id: 1929,
                                                    type: "text",
                                                    required: false,
                                                    label: "Institution",
                                                    information: null,
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
                                                    radioOtherOption: false,
                                                    informationIcon: null,
                                                    order: 1,
                                                },
                                                {
                                                    id: 1930,
                                                    type: "radio",
                                                    required: false,
                                                    label: "Single Choice Question",
                                                    information: null,
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
                                                    radioOtherOption: false,
                                                    informationIcon: null,
                                                    order: 2,
                                                    eventFormFieldOptions: [{
                                                            id: 9275,
                                                            label: "Option 1",
                                                            checked: false,
                                                            order: 1,
                                                        },
                                                        {
                                                            id: 9276,
                                                            label: "Option 2",
                                                            checked: false,
                                                            order: 2,
                                                        },
                                                    ],
                                                },
                                                {
                                                    id: 1931,
                                                    type: "datepicker",
                                                    required: false,
                                                    label: "Date Picker",
                                                    information: null,
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
                                                    radioOtherOption: false,
                                                    informationIcon: null,
                                                    order: 3,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    },
    components: { QuestionValues },
    template: `
      <QuestionValues :questions="questions" :questionSetupData="questionSetupData" dateFormat="US" />
    `,
}));