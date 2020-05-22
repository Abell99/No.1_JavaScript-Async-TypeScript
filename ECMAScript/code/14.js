/* 
    set 数据结构
*/


/* 
    类似于数组
    但是组内成员不允许重复
 */

 const s = new Set()

// 常用方法：
/* 
    set.add(value) 添加一个值，返回set结构本身
*/
s.add(1).add(2).add(3).add(4).add(1) // 重复的值将被忽略
console.log(s) // 输出结果： Set(4) { 1, 2, 3, 4 }

/* 
    set.delete(value) 删除指定数据，返回布尔值
*/
console.log(s.delete(1)) // 输出结果：true

/* 
    set.has(value) 判断该值是否存在，返回布尔值
*/
console.log(s.has(2)) // 输出结果：true

/* 
    set.clear() 清除所有数据，没有返回值
*/
// s.clear()
console.log(s) // 如果执行的话，输出结果： Set(0) {}

/* 
    set.keys() 返回键名遍历器
*/
console.log(s.keys()) // 输出结果：[Set Iterator] { 2, 3, 4 }

/* 
    set.entries() 返回键值对遍历器
*/
console.log(s.entries()) // 输出结果：[Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }

/* 
    循环遍历：forEach/for of
*/
for (let i of s) { console.log(i) } // 输出结果：2 3 4

// -----------------------------------------
/* 
    经典使用：普通数组去重
*/
const arr = [...new Set([1, 2, 3, 4, 5, 6, 1, 2, 3])]
console.log(arr)