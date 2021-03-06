/* 
    解构赋值,对象的解构赋值
*/

// -----------------------
// 定义一个对象
const obj = { name: 'abel', sex: '男', age: 12 }

// -----------------------------
/* 
    无序的对象中的属性,都有属性名
    因此可以直接用属性名来解构
    相比于数组的解构赋值,对象的解构赋值也同样可以
    - 使用剩余参数`...`
        // const { name , ...rest } = obj
        // console.log(rest)
    - 设置默认值
        // const { job = 'coder' } = obj
        // console.log(job)
*/


// ---------------------------------
// 起别名
// 原本的属性名将会被顶替,无法使用
// const { name: Name } = obj
// console.log('我的名字是:' + Name)

// -----------------
// 经典的应用场景
// 解构常用的方法
const { log } = console
log('abc')