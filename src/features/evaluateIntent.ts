export const evaluateIntent = (intent: string, answer: string) => {
    let evaluation: evaluatedLetter[] = []
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === intent[i]) {
            evaluation.push({ value: intent[i], statusType: 'OK' })
        } else if (answer.includes(intent[i])) {
            evaluation.push({ value: intent[i], statusType: 'POSITION' })
        } else {
            evaluation.push({ value: intent[i], statusType: 'WRONG' })
        }
    }
    return evaluation
}