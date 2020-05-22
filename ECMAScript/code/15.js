/* 
    map 数据结构
*/

/* 
    类似于对象
    都是键值对的集合
    对键的范围的升级，允许使用其他类型，例如：对象，数组，布尔类型（对象的键只能是字符串，如果不是也会转换为字符串）
*/

const m = new Map()
const obj = {
    name: 'abel',
    age: 23
}
// ---------------------------------------------------
// 常用方法
/* 
    map.set(key,value) 设置键名key对应的键值为value，然后返回map。
*/

console.log(m.set(obj, '是一个人')) // 输出结果：Map(1) { { name: 'abel', age: 23 } => '是一个人' }

/* 
    map.get(key) 根据键名，获取并返回对应的值
*/ 
console.log(m.get(obj)) // 输出结果：是一个人

/* 
    map.has(key) 判断某个键是否再当前的map对象中，返回一个布尔类型
*/
console.log(m.has(obj)) // 输出结果：true

/* 
    map.delete(key) 删除某个键，返回一个布尔值
*/
console.log(m.delete(obj)) // 输出结果：true

/* 
    map.clear() 清空Map对象 无返回值
*/
console.log(m.clear()) // 输出结果：undefined

// ---------------------------------------------------
// 为了更好的展示遍历结果，添加几个键值对
m.set(obj, '是一个对象')
m.set([1,2,3], '是一个数组')
m.set('abel', '是一个字符串')
m.set(true, '是一个布尔类型')
/* 
    map.keys() 返回键名的遍历器
*/
console.log(m.keys()) // 输出结果：[Map Iterator] { { name: 'abel', age: 23 }, [ 1, 2, 3 ], 'abel', true }

/* 
    map.values() 返回键值的遍历器
*/
console.log(m.values()) // 输出结果：[Map Iterator] { '是一个对象', '是一个数组', '是一个字符串', '是一个布尔类型' }

/* 
    map.entries() 返回所有成员的遍历器
*/
console.log(m.entries()) 
/* 输出结果：
    [Map Entries] {
        [ { name: 'abel', age: 23 }, '是一个对象' ],
        [ [ 1, 2, 3 ], '是一个数组' ],
        [ 'abel', '是一个字符串' ],
        [ true, '是一个布尔类型' ]
    } */

/* 
    map.forEach() 遍历数组
*/
m.forEach((value, key) => {
    console.log(key, value)
})
/* 输出结果：
    { name: 'abel', age: 23 } 是一个对象
    [ 1, 2, 3 ] 是一个数组
    abel 是一个字符串
    true 是一个布尔类型 */