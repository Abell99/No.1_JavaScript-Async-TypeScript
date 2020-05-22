/* 
    对象字面量的增强
*/

// -----------------------
// 强行认儿子
// const name = 'abel'
// const obj = {
//     name,
//     say:function () {
//         console.log(`${this.name}虽然不是我定义的，但是我感觉他就是我儿子`)
//     }
// }
// obj.say()

// -------------------------
// 函数定义的简化
// const obj = {
//     name: 'abel',
//     say () {
//         console.log(`我不是箭头函数，我仍然可以使用对象定义的属性:${this.name}`)
//     }
// }

// -----------------------
// 计算属性名
const name = 'abel'
const obj = {
    // name: 'abel', // 对象内部定义的不可以被计算属性名调用
    name,
    [name+'say']: '咱也不清楚最后是谁说的', // 属性名可以支持运算，拼接等
    [name] () { //方法声明也可以使用计算属性名
        console.log('方法名也可以是计算属性名')
    }
}
console.log(obj.abelsay)
obj.abel()