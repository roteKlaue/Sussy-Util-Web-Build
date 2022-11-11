import ImprovedArray from "./ImprovedArray";
export default class StringUtil {
    constructor() { }
    static reverse(input) {
        return input.split('').reverse().join('');
    }
    static randomCharacter(charset) {
        charset = charset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const set = new ImprovedArray(...new Set(...charset.split('')));
        return set.getRandomElement();
    }
    static randomString(length, characterset) {
        characterset = characterset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += this.randomCharacter(characterset);
        }
        return result;
    }
    static randomDiscordUsername(withSufix = false) {
        const length = Math.floor(Math.random() * 29) + 4;
        let name = this.randomString(length);
        if (!StringUtil.isDiscordUsername(name)) {
            name = this.randomDiscordUsername(false);
        }
        if (!withSufix)
            return name;
        return `${name}#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    }
    static isDiscordUsername(username) {
        return !!username.match(/^.{4,32}#\d{4}$/);
    }
    static isNumeric(value) {
        return /^\d+$/.test(value);
    }
    static isStrongPassword(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }
    static isWeakPassword(value) {
        return !this.isStrongPassword(value);
    }
    static isEmail(value) {
        return /^\S{4,}@\S+\.\S{2,3}$/.test(value);
    }
    static isHTTPUrl(value) {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }
    static isUrlWithoutHTTP(value) {
        return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }
    static isURL(value) {
        return this.isHTTPUrl(value) || this.isUrlWithoutHTTP(value);
    }
    static shorten(value, length, ellipsisCount) {
        if (length >= value.length)
            return value;
        const ellipsis = (new Array(ellipsisCount)).map(() => ".").join("");
        return value.substring(0, length) + ellipsis;
    }
    static slugify(str) {
        return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    }
    static stripHtmlTags(str) {
        return str.replace(/<[^>]*>/g, '');
    }
    static capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    static isIPv4(value) {
        return /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    }
    static isIPv6(value) {
        return /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value);
    }
    static isIP(value) {
        return this.isIPv4(value) || this.isIPv6(value);
    }
    static isMacAddress(value) {
        return /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/.test(value);
    }
    static isPhoneNumber(value) {
        return /^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(value);
    }
    static upperFirst(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
    static lowerFirst(str) {
        return str.charAt(0).toLowerCase() + str.substring(1);
    }
    static camelCase(str) {
        return this.lowerFirst(str.split(/[^\w]|_+/).map((val) => this.capitalize(val)).join(''));
    }
    static collaps(str) {
        return str.trim().split(" ").filter((val) => val.length > 0).join(" ");
    }
    static noSpaces(str) {
        return str.trim().split(" ").join("");
    }
    static toCharCode(str) {
        return str.split('').map((val) => val.charCodeAt(0)).join("");
    }
    static protectEmail(str) {
        if (!this.isEmail(str))
            return str;
        const half = str.split("@");
        half[0] = this.shorten(half[0], half[0].length / 2, 3);
        return half.join("@");
    }
    static swapCase(str) {
        return str.replace(/ ([a-z]+ ) | ( [A-Z]+ )/g, (match, chr) => chr ? match.toUpperCase() : match.toLowerCase());
    }
    static generatePassword(length, characters) {
        characters = characters || "ascdefghijklmnopqrstuvwxyzABCDEFGHIJLMOPRSTUVWXYZ1234567890!§$%&?#*+~'";
        if (StringUtil.isWeakPassword([...new Set(characters.split(""))].join("")))
            throw new Error("Not enough characters to generate password");
        const result = this.randomString(length, characters);
        if (StringUtil.isStrongPassword(result))
            return result;
        return this.generatePassword(length, characters);
    }
    static randomColorCode() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    static wordCount(str) {
        if (typeof str !== 'string') {
            return -1;
        }
        ;
        const sus = str.match(/\b\w+\b/);
        if (!sus) {
            return 0;
        }
        return sus.length;
    }
    static getRatingString(rate) {
        return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
    }
    static normalizeLineBreaks(str, lineEnd) {
        lineEnd = lineEnd || '\n';
        return str
            .replace(/\r\n/g, lineEnd)
            .replace(/\r/g, lineEnd)
            .replace(/\n/g, lineEnd);
    }
    static contains(str, substring, fromIndex) {
        return str.indexOf(substring, fromIndex) !== -1;
    }
    static repeat(str, n) {
        return (new Array(n + 1)).join(str);
    }
    static rpad(str, minLen, ch) {
        ch = ch || ' ';
        return (str.length < minLen) ? str + this.repeat(ch, minLen - str.length) : str;
    }
    static lpad(str, minLen, ch) {
        ch = ch || ' ';
        return ((str.length < minLen) ? this.repeat(ch, minLen - str.length) + str : str);
    }
}
