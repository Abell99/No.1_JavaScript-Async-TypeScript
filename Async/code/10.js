/* 
    体验Generator异步方案
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

// 定义一个生成器
function * main () {
    try {
        const foo = yield ajax('./api/foo.json')
        console.log(foo)
    
        const posts = yield ajax('./api/posts.json')
        console.log(posts)
        // 创造一个异常
        const postt = yield ajax('./api/postt.json')
        console.log(postt)
    } catch (e) {
        console.log(e)
    }
}

const g = main() // 创建生成器函数


// ----------------------------------------------------------------------------------
/* 
generator初体验
*/
// result.value => 返回的就是yield后面的promise异步任务
/* const result = g.next() // 进入函数体
    result.value
    .then(data => {
        // console.log(data) // data就是上一次触发next()触发的异步请求的结果 // 输出结果：foo.json文件的内容
        // 将上一个异步请求的结果作为参数，传给下一个promise,符合了promise的链式调用
        const result2 = g.next(data)
        // 判断返回内容，done是否为true，决定是否结束
        if (result2.done) return console.log('结束了')
        // 处理第二个promise的回调
        result2.value
            .then(data => {
                const result3 = g.next(data)
                if (result3.done) return console.log('结束了')
                // ...... 无限循环嵌套,因此需要递归解决
            })

    }) */


// -------------------------------------------------------------------------------
/* 
    递归执行generator
*/
// 定于一个函数，用来递归执行generator
/* function handleResult  (result) {
    if (result.done) return // 生成器函数结束
    result.value
        .then(data => {
             handleResult(g.next(data)) // 嵌套使用，如果进入到这一步，相当于又重新调用了一下这个函数
        }, error => {
            g.throw(error) // 打印异常的话，需要改造generator,添加try...catch用来处理异常 // 打印结果：Error: Not Found at XMLHttpRequest.xhr.onload (10.js:14)
        })
}

handleResult(g.next()) */

// -----------------------------------------------------------------
/* 
    复用生成器函数 ： co
        https://github.com/tj/co // 社区中关于generato生成器复用函数的完整的库
        被Async await 取代
*/
function co (generator) {
    const g = generator()

    function handleResult (result) {
        if (result.done) return
        result.value
            .then(data => {
                handleResult(g.next(data)) // 循环调用
            }, error => {
                g.throw(error)
            })
    }
    //  内部自调用
    handleResult(g.next())
}
// 传入一个generator
co(main)