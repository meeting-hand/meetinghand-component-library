export const questions2Flat = (questions) => {

    return questions.reduce((all, question) => {
        return Array.isArray(question.eventFormFieldOptions) ? [...all, {...question, eventFormFields: [] }, ...questions2Flat(question.eventFormFieldOptions.map(_o => _o.eventFormFields).flat())] : [
            ...all,
            {...question }
        ]
    }, []);
}

export const getQuestionLabelValue = (allQuestions, questionValue) => {

    allQuestions = questions2Flat(
        allQuestions
    );

    const question = allQuestions
        .find((_q) => _q.id === questionValue.id);
    if (question) {
        if (Array.isArray(questionValue.value)) {
            return question.eventFormFieldOptions.filter((_o) => questionValue.value.includes(_o.id)).map(_o => _o.label);
        } else {
            const option = question.eventFormFieldOptions.find((_o) => _o.id === questionValue.value);
            if (option) {
                return option.label
            }
        }
    }
    return "";

}