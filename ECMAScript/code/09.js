/* 
    对象的扩展方法
*/

// ------------------------
// Object.assign
// 将多个源对象中的属性复制到一个目标对象中
// 全中国每一个人给我一块钱，我就有13亿了
// 存在同名属性覆盖，源对象覆盖目标对象属性
// const myAnswer = {
//     no1: 'A',
//     no3: 'D'
// }
// const myAStuderAnswer = {
//     no1: 'C',
//     no2: 'B',
//     no3: 'D'
// }
// const myBStuderAnswer = {
//     no1: 'C',
//     no2: 'E',
//     no3: 'F'
// }
// // 通过Object调用对象方法
// const result = Object.assign(myAnswer, myAStuderAnswer, myBStuderAnswer) // 第一个参数为目标对象，第二个参数开始为源对象
// console.log(myAnswer) //返回结果：{ no1: 'C', no3: 'F', no2: 'E' } 结论：存在覆盖且持续覆盖
// console.log(result === myAnswer) // Object.assign的返回值等于目标对象

// --------------------------------
// Object.is
// 判断两个值是否想等
// console.log(NaN === NaN)  // 输出结果: false
// console.log(Object.is(NaN, NaN)) // 输出结果: true
// console.log(+0 === -0)  // 输出结果: true
// console.log(Object.is(+0, -0))  // 输出结果: false

// -------------------------------
// Object.defineProperty()
// 处理数据的读与写,直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
var obj = new Object();
 
Object.defineProperty(obj, 'name', {
    configurable: false,
    writable: true,
    enumerable: true,
    value: '张三'
})
 
console.log(obj.name)  //张三

// ---------------------------------
// Object.defineProperties()
// 直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。
var obj = new Object();
Object.defineProperties(obj, {
    name: {
        value: '张三',
        configurable: false,
        writable: true,
        enumerable: true
    },
    age: {
        value: 18,
        configurable: true
    }
})
console.log(obj.name, obj.age) // 张三, 18









