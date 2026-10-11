export const stringVerify = (string, pattern) => {
    if (typeof string !== 'string' ||
        string.length === 0 ||
        !(pattern instanceof RegExp) ||
        pattern.global ||
        pattern.sticky
    ) return false;

    return pattern.test(string);
}