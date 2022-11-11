import isClass from "./isClass";
export default function (a) {
    return a && (typeof a === 'function' || a instanceof Function) && !isClass(a);
}
