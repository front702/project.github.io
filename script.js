'use strict'
function square(w, h) {
    const rn = '\r\n';
    const tb = '* '.repeat(w) + rn;
    const center = ('*' + ' '.repeat(w * 2 - 3) + '*' + rn).repeat(h - 2);
    return console.log(tb + center + tb);
}
square(20, 20)