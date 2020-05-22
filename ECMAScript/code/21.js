/* 
    ES2017 比16大一点的小版本
*/

const obj = {
    foo: 'value1',
    bar: 'value2'
}
// -------------------------------------
/* 
    Object.values
        返回对象中所有的值组成的数组
*/ 
console.log(Object.values(obj)) // 输出结果：[ 'value1', 'value2' ]

// -----------------------------------------
/* 
    Object.entries
        将对象中的所有键值对通过数组的形式返回
*/
console.log(Object.entries(obj)) // 输出结果：[ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]
// 案例一：
    // 可以使用Object.entries返回的结果，通过for...of循环遍历对象
    for (const [key, value] of Object.entries(obj)) {
        console.log(key, value)
        /* 输出结果：
            foo value1
            bar value2 */
    }
// 案例二：
    // 根据Object.entries的返回结果可以观察到，这契合了Map数据结构的要求，因此可以通过entries的返回值，将对象转换为Map数据结构
    console.log(new Map(Object.entries(obj)))
        /* 输出结果：
            Map(2) { 'foo' => 'value1', 'bar' => 'value2' } */

// ---------------------------------------------
/* 
    Object.getOwnPropertyDescriptors
        获取对象的完整描述信息,完善ES2015中get，set的使用
*/
const p1 = {
    firstName: '狗蛋',
    lastName: '李',
    get fullName () {
        return this.firstName + ' ' + this.lastName
    }
}
// Object.assing() 复制对象后，get，set存在的问题
    const p2 = Object.assign({}, p1)
    p2.firstName = '逍遥' // 修改p2 中的值
    console.log(p2)
    /* 输出结果：
        { firstName: '逍遥', lastName: '李', fullName: '狗蛋 李' }
        结果分析:
            fullName通过assign复制，只是复制了值。 */
// 使用Object.getOwnPropertyDescriptors来解决上面的问题
    const descriptors = Object.getOwnPropertyDescriptors(p1)
    /*  console.log(descriptors)
        输出结果：
            {
                firstName: { value: '狗蛋', writable: true, enumerable: true, configurable: true },
                lastName: { value: '李', writable: true, enumerable: true, configurable: true },
                fullName: {
                    get: [Function: get fullName],
                    set: undefined,
                    enumerable: true,
                    configurable: true
                }
            }
    */
    // 通过获取对象的完整信息之后，再复制的对象，就可以完整复制set，get的使用效果
    const p3 = Object.defineProperties({}, descriptors)
    p3.firstName = '逍遥'
    console.log(p3.fullName) // 输出内容：逍遥 李

// ---------------------------------------------
/* 
    String.prototype.padStart / String.prototype.padEnd
        字符串填充方法，用给定的字符串去填充目标字符串的开始或结束位置
*/
const books = {
    html: 5,
    css: 16,
    javaSctipt: 111
}
for (const [name, count] of Object.entries(books)) {
    console.log(`${name.padEnd(16, '-')}=>${count.toString().padStart(3, '0')}`)
}
/* 输出内容
    html------------=>005
    css-------------=>016
    javaSctipt------=>111 */

// -----------------------------------------------
/* 
    允许尾逗号的存在
*/
const arr = [
    1,
    2,
    3,
]
console.log(arr)
const abc = {
    a: 'a',
    b: 'b',
    c: 'c',
}
console.log(abc)
function foo(a,b,c,) {
    console.log('函数的参数也有尾逗号')
}
foo(1,2,3)

// -----------------------------------------------
/* 
    Async / Await
        重量级更新部分，用于异步处理的进一步优化
        彻底解决异步回调函数嵌套过深的问题
        本质：promise的语法糖
*/