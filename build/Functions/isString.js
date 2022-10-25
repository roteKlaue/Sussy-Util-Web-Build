export default function (args) {
    return args && (typeof args === "string" || args instanceof String || (args + "") === args);
}
