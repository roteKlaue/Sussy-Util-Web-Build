import { IsSomething } from "../allClasses";
/** @deprecated */
export default (arg) => arg instanceof Object && !IsSomething.isArray(arg);
