/** @deprecated */
export default (a) => (a && a instanceof Error) || (a && a.constructor === Error.constructor);
