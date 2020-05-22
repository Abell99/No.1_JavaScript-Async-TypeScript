/* 
    模板字符串字面量
*/

// -----------------------
// 相对于传统字符串的特性
// -----------------------

// -------------------------
// 支持换行符
// const str = 
// `
//     <div>
//         <span></span>
//     </div>
// `
// console.log(str)


// ----------------
// 支持插值表达式
// const name = 'abel'
// const math = function (year) {
//     return year/12
// }
// const msg = `My name is ${ name }. Next year will be ${ 23 + 1 }.  24 is several times 12?: ${ math(24) }`
// console.log(msg)


// -----------------
// 带标签的模板字符串
// 模板字符串的加工
const name = 'abel'
const age = 23
function myAge (strings, name, age) {
    // strings 第一个参数接收所有的以插值表达式分割的字符串内容,并以数组的形式返回
    // console.log(strings, name, age)
    // 返回内容:
    // [ 'my name is ', ", I'm ", " years old , I'll be 28 in five years" ] abel 23
    // ---------------------
    return strings[0] + name + strings[1] + age + strings[2] + `I'll be ${ age + 5 } in five years `
}
const result = myAge`my name is ${ name }, I'm ${ age } years old.`
console.log(result)

