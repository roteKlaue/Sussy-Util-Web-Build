export default async function (promise, ...args) {
    try {
        const data = await promise(...args);
        return [data, null];
    }
    catch (e) {
        return [null, e];
    }
}
