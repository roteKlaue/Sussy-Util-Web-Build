/** @deprecated */
export default (args) => args && (typeof args === "string" || args instanceof String || (args + "") === args);
