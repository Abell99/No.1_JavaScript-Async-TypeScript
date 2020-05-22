/* 
    Promise静态方法  
*/

// -----------------------------------------------------
/* 
    Promise.resolve()
        将任意的参数变为promise
*/
// 传入字符串等类型的，属于作为参数，传给了自己的回调函数
const foo = Promise.resolve('foo')
foo
    .then(
        function (value) {
            console.log(value) // 结果输出：foo
        }
    )
// 传入一个promise,等于promise本身
const foo1 = Promise.resolve(foo)
foo1
    .then(
        function (value) {
            console.log(value) // 结果输出：foo
        }
    )
// 传入一个拥有then方法的对象，第三方promise转原生promise的解决方案
Promise.resolve({
    then: function (onFulfilled, onRejected) {
        onFulfilled('foo')
    }
})
    .then(function (value) {
        console.log(value) // 结果输出：foo
    })

// ---------------------------------------------------------
/* 
    Promise.reject()
        快速创建一个失败的原因
*/
Promise.reject('这就是我失败理由')
    .catch(function (error) {
        console.log(error) // 结果输出：这就是我失败理由
    })