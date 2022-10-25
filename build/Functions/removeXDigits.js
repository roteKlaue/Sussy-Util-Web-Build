export default function (n, pos) {
    return parseFloat(n.toString().substring(0, pos - 1).concat(n.toString().substring(pos, n)));
}
