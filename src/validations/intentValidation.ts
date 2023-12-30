export const validateIntent = (intent: string, length: number) => {
    if (intent.length < length) {
        return false
    }
    if (intent.trim().length === 0) {
        return false
    }
    return true
}