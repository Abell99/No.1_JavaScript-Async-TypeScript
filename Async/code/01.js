/* 
    回调函数
*/

/* 
    最早的回调函数
        通过传递回调参数实现
*/
function foo (callback) {
    setTimeout(function () {
        callback()
    }, 3000)
}
// 调用函数，并传递回调参数
foo(function () {
    console.log('这就是一个回调函数，调用者定义这个函数，执行栈执行这个函数，其实就是调用者告诉执行者异步任务结束之后应该做什么')
})