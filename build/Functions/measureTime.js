export default function (label, func, ...params) {
    console.time(label);
    func(...params);
    console.timeEnd(label);
}
