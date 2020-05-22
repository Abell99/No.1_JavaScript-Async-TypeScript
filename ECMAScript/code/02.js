/* 
    解构赋值,数组的解构赋值
*/

// 数组的结构赋值
// 定义一个数组
const arr = [1,2,3]

// ----------------
// 基础的数组的解构赋值写法
// const [ a, b, c, d ] = arr // 一对一按顺序匹配,没有匹配到的返回undefined
// console.log(a,b,c,d)

// ----------------
// 支持空格占位
// const [ , , c] = arr
// console.log(c)

// ----------------
// 剩余参数`...`
// const [ a, ...rest] = arr // 只能解构赋值的最后一个使用
// console.log(...rest) // 参数单独输出
// console.log(rest) // 以数组的格式输出

// -----------------
// 默认值
// const [ a, b = 3, c, d = 5] = arr
// console.log("b的默认值为3,解构赋值为:" + b)
// console.log("d的默认值为5,解构赋值为:" + d) // 默认值会被替换,如果数组中存在相应的位置的值的话

// -----------------
// 经典的应用场景
// 解构字符串
// const path = 'a/b/c'
// const [ ...rootdir ] = path.split('/')
// console.log(rootdir)
const [, b, c, d, e, f = 'b'] = 'hello';
console.log(b,c,d,e,f)