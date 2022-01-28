import * as yup from "yup";
import { useField } from "vee-validate";
import { QuestionTypes } from "./questionTypes";

const question2Yup = (question) => {
    return questionYupValidations(question2YupDataType(question), question);
};

const question2YupDataType = (question) => {
    if (question.type === QuestionTypes.number) {
        return yup.number();
    } else if (question.type === QuestionTypes.checkbox) {
        return yup.array();
    } else if (question.type === QuestionTypes.file) {
        return yup.mixed();
    }

    return yup.string().nullable();
};

const questionYupValidations = (_y, question) => {
    if (question.required) {
        _y = _y.required().nullable();
    } else {
        _y = _y.nullable();
    }

    if (question.textMinChar || question.textareaMinChar) {
        _y = _y.min(question.textMinChar || question.textareaMinChar).nullable();
    }

    if (question.textMaxChar || question.textareaMaxChar) {
        _y = _y.max(question.textMaxChar || question.textareaMaxChar).nullable();
    }

    return _y;
};

export const questionValidation = (question, fieldPrefix) =>
    useField(`${fieldPrefix}${question.id}`, question2Yup(question), {
        initialValue: question.value,
    });