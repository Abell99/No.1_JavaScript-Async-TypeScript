/* 
    ES 2016 小版本更新
*/


// -----------------------------------
/* 
    Array.prototype.includes
        包含否
*/
const arr = [1, 'abc', NaN, false]

// 与indexOf()的区别
console.log(arr.indexOf(NaN)) // 输出结果： -1
console.log(arr.includes(NaN)) // 输出结果： true

// ----------------------------------
/* 
    `**` 新的指数运算符
*/

// 老牌的指数运算，为Math中的pow方法
console.log(Math.pow(2,3)) // 输出结果 8
console.log(2 ** 3) // 输出结果 8