export function isStringNumeric(s: string): boolean {
    const n = Number(s);
    return !isNaN(n) && !isNaN(Number(parseFloat(s)));
}