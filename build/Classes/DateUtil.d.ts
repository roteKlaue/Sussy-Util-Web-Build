export default class DateUtil {
    static monthAbrs: string[];
    static mFullNames: string[];
    static dayAbrs: string[];
    static dFullNames: string[];
    static getCurrentDate(): Date;
    static today(): Date;
    static tomorrow(): Date;
    static yesterday(): Date;
    static compareDates(dt1: Date, dt2: Date): number;
    static equals(dt1: Date, dt2: Date): boolean;
    static getMonthAbbr(number: number): string;
    static getMonthFullName(number: number): string;
    static getDayAbbr(number: number): string;
    static getDayFullName(number: number): string;
    static isLeapYear(year: number): boolean;
    static weekFirstDay(): Date;
    static weekLastDay(): Date;
    static leapYearsInRange(start: number, endYear: number): number[];
    static getMonthFirstDay(): Date;
    static getMonthLastDay(): Date;
}
