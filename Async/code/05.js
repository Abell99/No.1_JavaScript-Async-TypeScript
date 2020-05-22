/* 
    Promise异常处理
*/

function ajax (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response) // 承诺成功达成之后，返回得到的数据
            } else {
                reject(new Error(this.statusText)) // 承诺无法达成之后，返回new出来的错误信息
            }
        }
        xhr.send()
    })
}

// 异步任务
ajax('./api/foo.json')
    .then(
        function (res) {
            console.log(res)
            // 返回一个错误的promise
            return ajax('./api/abel.json')
        },
        function (error) {
            console.log(error + ' 离太近了，不好意思抓') // 并没有捕获上面的异常
        }
    )
// catch处理错误
ajax('./api/foo.json')
    .then(
        function err (res) {
            console.log(res)
            // 返回一个错误的promise
            return ajax('./api/abel.json')
        }
    )
    // 本质就是紧跟着的then中的promise的回调
    .catch(
        function (error) {
            console.log(error + ' 小样，哪里跑') // 结果输出：Error: Not Found 小样，哪里跑
        }
    )

/* 
    全局对象错误统一处理
*/
// Web中
window.addEventListener('unhandledrejection', event => {
    const { reason, promise } = event
    console.log(reason, promise)
    // reason => Promise
    // promise => 出现异常的Promise对象
    event.preventDefault()
}, false)
// node中
process.on('unhandledRejection', (reason, promise) => {
    console.log(reason, promise)
    // reason => Promise
    // promise => 出现异常的Promise对象
})