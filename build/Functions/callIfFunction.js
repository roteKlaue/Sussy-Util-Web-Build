import isFunction from "./isFunction";
export default function (func, ...params) {
    if (!isFunction(func))
        return null;
    return func(...params);
}
