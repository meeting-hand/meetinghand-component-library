export const questions2Flat = (questions) => {
    return questions.reduce((all, question) => {
        if (Array.isArray(question.eventFormFieldOptions)) {
            return [
                ...all,
                question,
                ...[
                    ...questions2Flat(
                        question.eventFormFieldOptions
                        .filter(
                            (_o) =>
                            Array.isArray(_o.eventFormFields) &&
                            _o.eventFormFields.length > 0
                        )
                        .map((_o) => _o.eventFormFields)
                        .flat()
                    ),
                ],
            ];
        }
        return [...all, question];
    }, []);
};

export const getQuestionLabelValue = (allQuestions, questionValue) => {
    allQuestions = questions2Flat(allQuestions);

    const question = allQuestions.find((_q) => _q.id === questionValue.id);

    console.log(allQuestions);
    if (question) {
        if (Array.isArray(questionValue.value)) {
            return question.eventFormFieldOptions
                .filter((_o) => questionValue.value.includes(_o.id))
                .map((_o) => _o.label);
        } else {
            const option = question.eventFormFieldOptions.find(
                (_o) => _o.id === questionValue.value
            );
            if (option) {
                return option.label;
            } else if (typeof questionValue.value === "string") {
                return questionValue.value;
            }
        }
    }
    return "";
};