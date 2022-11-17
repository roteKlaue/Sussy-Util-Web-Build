export default class Random {
    static randomInt(lower?: number, upper?: number): number;
    static randomDouble(lower?: number, upper?: number): number;
    static randomChar(charset?: string): string;
    static randomString(length?: number, charset?: string): string;
    static randomElement(arr: any[]): any;
}
