export default function (a) {
    return a && (a.constructor === Date.constructor || a instanceof Date);
}
