export default class isSomething {
    static isArray(arg: any): boolean;
    static isBoolean(arg: any): boolean;
    static isClass(arg: any): boolean;
    static isDate(arg: any): boolean;
    static isDefined(arg: any): boolean;
    static isEmpty(arg: any): boolean;
    static isError(arg: any): boolean;
    static isEven(num: number): boolean | null;
    static isFunction(a: any): boolean;
    static isInfinite(arg: any): boolean;
    static isNullorUndefined(arg: any): boolean;
    static isNumber(arg: any): boolean;
    static isObject(arg: any): boolean;
    static isPrime(num: number): boolean | null;
    static isPrimitive(arg: any): boolean;
    static isRegExp(arg: any): boolean;
    static isString(args: any): boolean;
    static isSymbol(arg: any): boolean;
    static isType(arg: any, type: String): boolean;
    static isInstanceOf(value: any, constructor: Function): boolean | null;
}
