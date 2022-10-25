export default function (func, callback, ...params) {
    try {
        const res = func(...params);
        callback(res, null);
    }
    catch (e) {
        callback(null, e);
    }
}
