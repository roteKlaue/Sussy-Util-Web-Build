export default function (str) {
    const obj = JSON.parse(str);
    if (typeof obj !== 'object') {
        throw new TypeError('Invalid JSON string passed');
    }
    return obj;
}
