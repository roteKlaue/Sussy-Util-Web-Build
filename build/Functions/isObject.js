import isArray from "./isArray";
export default function (arg) {
    return arg instanceof Object && !isArray(arg);
}
