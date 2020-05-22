/* 
    Promise 方式的 AJAX
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
    .then( // 默认函数第一个成功，第二个失败
        // 承诺成功达成,对于返回的成功信息的处理
        function (res) {
            console.log(res) // 成功之后，朴实无华的打印出来获取到的数据 (2) [{…}, {…}]
        },
        // 承诺失信了，对于失败的返回信息的处理
        function (error) {
            console.log(error) // 返回失败信息
        }
    )
