import { IsSomething } from "../allClasses";
export default function (obj, prop) {
    if (IsSomething.isString(prop))
        return false;
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
