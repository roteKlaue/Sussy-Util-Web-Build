/** @deprecated */
export default function (lower = 0, upper = 10) {
    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
