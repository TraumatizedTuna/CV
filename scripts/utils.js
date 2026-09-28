
String.prototype.toPrettySelector = function () {
    let res = '';
    for (let i = 0; i < this.length; i++) {
        c = this.charAt(i).toLowerCase()
        // If c is already nice, move on to next character
        if (!'abcdefghijklmnopqrstuvwxyz0123456789-'.includes(c)) {
            c = c === ' ' ? '_' : `U${this.charCodeAt(i)}`;
        }
        res += c
    }
    if ('0123456789-'.includes(res.charAt(0))) res = '_' + res;
    return res;
}