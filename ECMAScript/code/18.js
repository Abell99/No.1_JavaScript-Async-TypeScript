/* 
    for of 循环
*/

/* 
    for---普通数组
    for...in---键值对
    对象的遍历    
        forEach

    全新的遍历方式:for...of
    作为今后遍历所有数据结构的统一方式
*/

// ---------------------------------------------
/* 
    遍历普通数组
*/
const arr = [100, 200, 300]
for (const item of arr) {
    if (item > 100) {
        break // break 关键词可以随时终止遍历
    }
    console.log(item) // 返回的是值
}

// -------------------------------------
/* 
    遍历Map
*/
// 此处为练习使用map数据结构
const arrD = new Map()
arrD.set({ name: 123 }, '456')
arrD.set( 'abc', 'deg' )
arrD.set( true, 'ok' )
arrD.set( ['a', 'b'], ['c', 'd', 'e'] )
// console.log(arrD)

for (const [key, value] of arrD) {
    console.log(`键来:${ key },值来: ${ value }`)
}


// ------------------------------------------
/* 
    遍历Set
*/
const s = new Set()
s.add(1).add(2).add(3).add(4)
for (const item of s) {
    console.log(item)
}



