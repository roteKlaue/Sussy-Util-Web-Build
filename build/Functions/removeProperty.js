export default function (obj, prop) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        delete obj[prop];
    }
    return obj;
}
