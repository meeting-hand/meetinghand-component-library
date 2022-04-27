export const questions2Flat = (questions: any) => {
    return questions.reduce((all: any[], question: any) => {
        if (Array.isArray(question.eventFormFieldOptions)) {
            return [
                ...all,
                question,
                ...[
                    ...questions2Flat(
                        question.eventFormFieldOptions
                            .filter(
                                (_o: any) =>
                                    Array.isArray(_o.eventFormFields) &&
                                    _o.eventFormFields.length > 0
                            )
                            .map((_o: any) => _o.eventFormFields)
                            .flat()
                    ),
                ],
            ];
        }
        return [...all, question];
    }, []);
};

export const getQuestionLabelValue = (allQuestions: any[], questionValue: any) => {
    allQuestions = questions2Flat(allQuestions);

    const question = allQuestions.find((_q) => _q.id === questionValue.id);

    console.log(allQuestions);
    if (question) {
        if (Array.isArray(questionValue.value)) {
            return question.eventFormFieldOptions
                .filter((_o: any) => questionValue.value.includes(_o.id))
                .map((_o: any) => _o.label);
        } else {
            const option = question.eventFormFieldOptions.find(
                (_o: any) => _o.id === questionValue.value
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