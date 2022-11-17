export default function (obj, removeNull) {
    if (!obj || typeof obj !== 'object') {
        return [];
    }
    if (Array.isArray(obj)) {
        return obj;
    }
    return Object.keys(obj).map(e => obj[e]).filter(obj => !removeNull || obj);
}
