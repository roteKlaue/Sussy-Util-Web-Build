export default function (arg) {
    return arg && (typeof arg === "symbol" || arg instanceof Symbol);
}
