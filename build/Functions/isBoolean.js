export default function (arg) {
    return arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");
}
