
/* 
    对象的代理方法
*/


// --------------------------------
// 对象代理：Proxy
// 现在更为常用的门卫
// const person = { // 定义一个被监视的对象
//     name: 'zce',
//     age: 20
// }
// // // new 一个门卫，返回一个拥有代理的对象
// const personProxy = new Proxy(person, { // 第一个参数为被监视的对象，第二个参数为代理对象本身的内容处理
//     // 代理里面有两大方法
//     // get 监控数据的读取
//     get (target, property) {  // get的第一个参数为监控对象本身，第二个参数为读取的属性具体是哪一个
//         // console.log(target, property) // 通过personProxy.name调用 结果返回：{ name: 'zce', age: 20 } name
//         return property + '通过代理对象返回的值' // 根据查询来返回，还可以做一些修改
//     },
//     // set 监控数据的改变
//     set (target, property, value) { // set的前两个参数与get相同,第三个参数为修改的属性需要修改的值
//         if (property === 'age') {
//             // 可以通过限制age只能设置为Int类型
//             if (!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not an int`)
//             }
//         }
//         // 修改值
//         target[property] = value
//     },
//     // deleteProperty 删除数据
//     deletePropert (target, property) {
//         console.log('delete', property) 
//         delete target[property]
//     },
//     // getPropertypeOf
//     getPropertypeOf (target, property) {
//         console.log
//     }
// })
// -------------------------------------------------------
// 测试数据的读取
// personProxy.name
// console.log(personProxy.name)

// 测试数据的写入
// console.log(personProxy.age = 22)
// console.log(personProxy) // 修改的表面上是personProxy,但实际上是被监控的对象Person
// console.log(person)

// 测试数据的删除
// delete personProxy.age
// console.log(person)

// 差别
// proxy能够监视到更多对象操作 （例如，delete操作，对象中方法的调用）
// defineProperty只能监视属性的读写


// 关于数组，proxy也有话说
const list = []
const listProxy = new Proxy(list, {
    set (target, property, value) { // 通过push方法调用,property会根据后一个下标位置,添加新的数组对象
        // console.log('set', property, value)
        target[property] = value
        return true // 表示设置成功
    }
})

// 测试数组的添加功能
listProxy.push(200)
console.log(list)