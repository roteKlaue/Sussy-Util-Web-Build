export default function (obj, prop, value) {
    if (typeof obj !== "object") {
        return obj;
    }
    if (typeof prop !== "string") {
        return obj;
    }
    if (typeof value === "undefined") {
        return obj;
    }
    obj[prop] = value;
    return obj;
}
