/* 
    Promise并行执行
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

// -------------------------------------------------------
/* 如何判断都结束了
    之前：计数器
    现在：all
    */ 

/* 
    Promise.all()
        将多个promise合并，一荣俱荣一损俱损
*/
var promise = Promise.all(
    [
        ajax('./api/foo.json'),
        ajax('./api/foo.json')        
    ]
)
promise
    .then(function (values) {
        console.log(values) // 结果输出：(2) [Array(2), Array(2)] // 返回all里面promise返回的内容，组成的数组
    })
    .catch(function (error) {
        console.log(error) // 但凡有一个出错，就会报错
    })

// ------------------------------------------------------------
/* 
    Promise.race()
        弱水三千只取一瓢，只要有完成的就不再等待其他的异步任务了
*/
const request = ajax('./api/posts.json')
const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('timeout')), 500)
}) 

Promise.race([
    request,
    timeout
])
    .then(value => {
        console.log(value) // 输出结果：返回最早完成的异步任务，可以在开发者工具中更改网速来体验
    })
    .catch(error => {
        console.log(error)
    })

// -------------------------------------------------------
/* 
    混合使用
*/
ajax.apply('./api/urls/json')
    .then(value => {
        const urls = Object.values(value)
        const tasks = urls.map(url => ajax(url))
        return Promise.all(tasks)
    })
    .then(valuse => {
        console.log(values)
    })