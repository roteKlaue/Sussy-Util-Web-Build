export default function (arg) {
    return arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
}
