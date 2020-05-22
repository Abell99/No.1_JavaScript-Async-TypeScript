/* 
    函数形参列表的扩展方法
*/

// --------------------------
// 参数默认值
// function msg (name, age = 0, sex = '女') {
//     console.log('my name is ' + name + ',age:' + age + ',sex:' + sex)
// }
// msg('abel',23,'男')


// -----------------------------
// 剩余参数`...`
function foo (a, b, ...args) {
    console.log(a,b,args) // 输出结果:1 2 [ 4, 5, 6, 7, 8, 9 ]
    // 展开运算符的使用
    console.log(a,b,...args) // 输出结果:1 2 4 5 6 7 8 9
}
foo(1,2,4,5,6,7,8,9)

// -------------------
// 展开运算符
const arr = ['foo', 'bar', 'baz']
console.log(...arr) // 输出结果:foo bar baz