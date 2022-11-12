export default (arg) => arg && (typeof arg === 'number' || /^\d+$/.test(arg));
