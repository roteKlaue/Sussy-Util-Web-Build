import { hasValue, objectToString } from "../allFunctions";
export default class isSomething {
    static isArray(arg) {
        return Array.isArray(arg) || objectToString(arg) === "[object Array]";
    }
    static isBoolean(arg) {
        return arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");
    }
    static isClass(arg) {
        if (typeof arg !== 'function') {
            return false;
        }
        try {
            arg();
        }
        catch (e) {
            if (/^Class constructor/.test(e.message)) {
                return true;
            }
        }
        return false;
    }
    static isDate(arg) {
        return arg && (arg.constructor === Date.constructor && arg instanceof Date);
    }
    static isDefined(arg) {
        return typeof arg !== 'undefined';
    }
    static isEmpty(arg) {
        return !hasValue(arg);
    }
    static isError(arg) {
        return arg && (arg.constructor === Error.constructor && arg instanceof Error);
    }
    static isEven(num) {
        if (typeof num !== "number") {
            return null;
        }
        return num / 2 === 0;
    }
    static isFunction(a) {
        return a && (typeof a === 'function' || a instanceof Function) && !this.isClass(a);
    }
    static isInfinite(arg) {
        return arg && (arg === Infinity || arg === -Infinity);
    }
    static isNullorUndefined(arg) {
        return arg === null || arg === undefined;
    }
    static isNumber(arg) {
        return arg && (typeof arg === 'number' || (typeof arg === "string" && /^\d+$/.test(arg)));
    }
    static isObject(arg) {
        return arg && (typeof arg === "object" && arg instanceof Object && !this.isArray(arg));
    }
    static isPrime(num) {
        if (typeof num !== 'number') {
            return null;
        }
        if (num < 2) {
            return false;
        }
        if (num % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % 2 === 0)
                return false;
        }
        return true;
    }
    static isPrimitive(arg) {
        return this.isNullorUndefined(arg) || this.isString(arg) || this.isNumber(arg) || this.isBoolean(arg) || this.isSymbol(arg);
    }
    static isRegExp(arg) {
        return arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
    }
    static isString(args) {
        return args && (typeof args === "string" || args instanceof String || (args + "") === args);
    }
    static isSymbol(arg) {
        return arg && (typeof arg === "symbol" || arg instanceof Symbol);
    }
    static isType(arg, type) {
        return typeof arg === type;
    }
    static isInstanceOf(value, constructor) {
        if (!this.isClass(constructor))
            return null;
        return value instanceof constructor;
    }
}
