export default function (value) {
    if (typeof value !== 'function') {
        return false;
    }
    try {
        value();
    }
    catch (e) {
        if (/^Class constructor/.test(e.message)) {
            return true;
        }
    }
    return false;
}
