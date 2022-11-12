import { IsSomething } from "../allClasses";
/** @deprecated */
export default (a) => a && (typeof a === 'function' || a instanceof Function) && !IsSomething.isClass(a);
