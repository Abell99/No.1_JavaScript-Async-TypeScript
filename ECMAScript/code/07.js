/* 
    箭头函数
*/

// -----------------------
// 简化函数
// 传统函数定义:
// function inc (number) {
//     return number + 1
// }
// 箭头函数
const inc = n => n + 1 
// console.log(inc(1))

// -----------------
// 回调函数的优化
const arr = [1, 2, 3, 4, 5, 6, 7]
// 使用filter过滤函数筛选奇数
arr.filter(function (item) {
    return item % 2
})
// 使用箭头函数作为回调函数
arr.filter(i => i % 2)

// ----------------------
// this的指向
const person = {
    name: 'abel',
    // 普通函数中，this指向可以帮助函数在内部访问外部函数
    sayHi: function () {
        console.log(`hi,my name is ${this.name}`)
    },
    // 而在箭头函数中，this的指向未曾发生改变，就无法使用this来指向外部作用域的变量,当然也无法直接调用外部变量及方法
    // sayHello: () => {
    //     console.log(`hello,my name is ${name}`)
    // },
    // 在函数嵌套函数的情况下，可以利用闭包的原理，也可以使函数的子函数调用到函数的父函数的变量以及方法，实现隔代遗传
    sayHiAsync: function () {
        // 以前如何将爷爷的参数传递给孙子
        // const _this = this
        // setTimeout(function () {
        //     console.log(_this.name)
        // }, 1000)
        setTimeout(()=> {
            console.log(this.name)
        }, 1000)
    }
}
person.sayHi()
// person.sayHello()
person.sayHiAsync()