export default function (a) {
    return (a && a instanceof Error) || (a && a.constructor === Error.constructor);
}
