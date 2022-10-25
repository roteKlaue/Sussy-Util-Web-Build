export default function (arg) {
    return arg && (typeof arg === 'number' || /^\d+$/.test(arg));
}
