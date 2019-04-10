const _ld = require("lodash");

const numbers = [23, 44,65, 78, 14, 54, 96, 91];
_ld.each(numbers, function (num, i){
    console.log(numbers[i] + " == " +num);
})