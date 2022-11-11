export default function (a, b) {
    for (const key in b) {
        if (!!a[key]) {
            continue;
        }
        a[key] = b[key];
    }
    return a;
}
