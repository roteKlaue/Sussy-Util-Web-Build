export default class DateUtil {
    /**
     * Get the current date and time
     * @returns {Date}
     * */
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
        return dt1.valueOf() - dt2.valueOf();
    }
    static equals(a, b) {
        return a.valueOf() === b.valueOf();
    }
    static getMonthAbbr(number) {
        return this.monthAbrs[number] ? this.monthAbrs[number] : "";
    }
    static getMonthFullName(number) {
        return this.mFullNames[number] ? this.mFullNames[number] : "";
    }
    static getDayAbbr(number) {
        return this.dayAbrs[number] ? this.dayAbrs[number] : "";
    }
    static getDayFullName(number) {
        return this.dFullNames[number] ? this.dFullNames[number] : "";
    }
    static isLeapYear(year) {
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
        const sus = [];
        for (let i = start; i <= endYear; i++) {
            if (this.isLeapYear(i))
                sus.push(i);
        }
        return sus;
    }
}
DateUtil.monthAbrs = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
DateUtil.mFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
DateUtil.dayAbrs = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
DateUtil.dFullNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
