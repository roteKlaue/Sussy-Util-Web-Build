import IsSomething from "../Classes/IsSomething";
export default function (func, ...params) {
    if (!IsSomething.isFunction(func))
        return null;
    return func(...params);
}
