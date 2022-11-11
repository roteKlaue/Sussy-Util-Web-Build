export default class DateUtil {
    static getCurrentDate() {
        return new Date(Date.now());
    }
    static today() {
        const wash = this.getCurrentDate();
        wash.setHours(0, 0, 0, 0);
        return wash;
    }
    static tomorrow() {
        const today = this.today();
        today.setDate(today.getDate() + 1);
        return today;
    }
    static yesterday() {
        const today = this.today();
        today.setDate(today.getDate() - 1);
        return today;
    }
    static compareDates(dt1, dt2) {
        if (!(dt1 instanceof Date && dt2 instanceof Date))
            throw new TypeError("expected Date for dt1 and dt2");
        return dt1.valueOf() - dt2.valueOf();
    }
    static equals(dt1, dt2) {
        if (!(dt1 instanceof Date && dt2 instanceof Date))
            throw new TypeError("expected Date for dt1 and dt2");
        return dt1.valueOf() === dt2.valueOf();
    }
    static getMonthAbbr(number) {
        if (typeof number !== 'number')
            throw new TypeError("expected number for number");
        return this.monthAbrs[number] ? this.monthAbrs[number] : "";
    }
    static getMonthFullName(number) {
        if (typeof number !== 'number')
            throw new TypeError("expected number for number");
        return this.mFullNames[number] ? this.mFullNames[number] : "";
    }
    static getDayAbbr(number) {
        if (typeof number !== 'number')
            throw new TypeError("expected number for number");
        return this.dayAbrs[number] ? this.dayAbrs[number] : "";
    }
    static getDayFullName(number) {
        if (typeof number !== 'number')
            throw new TypeError("expected number for number");
        return this.dFullNames[number] ? this.dFullNames[number] : "";
    }
    static isLeapYear(year) {
        if (typeof year !== 'number')
            throw new TypeError("expected number for year");
        return !(year % (year % 100 ? 4 : 400));
    }
    static weekFirstDay() {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getDate() - (nowDate.getDay() - 1) * 86400000);
    }
    static weekLastDay() {
        const firstDay = this.weekFirstDay();
        return new Date((firstDay.getDate() / 1000 + 6 * 86400) * 1000);
    }
    static leapYearsInRange(start, endYear) {
        if (typeof start !== 'number' || typeof endYear !== 'number')
            throw new TypeError("expected number for start and endYear");
        const sus = [];
        for (let i = start; i <= endYear; i++) {
            if (this.isLeapYear(i))
                sus.push(i);
        }
        return sus;
    }
    static getMonthFirstDay() {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getFullYear(), nowDate.getMonth());
    }
    static getMonthLastDay() {
        const nowDate = this.getCurrentDate();
        return new Date(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1).valueOf() - 86400000);
    }
}
DateUtil.monthAbrs = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
DateUtil.mFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
DateUtil.dayAbrs = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
DateUtil.dFullNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
