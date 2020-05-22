/* 
    Async语法糖
*/

/* 
    终极的异步解决方案。
    语言层面的异步编程标准
*/

/* 
    语法类似于generator
    返回一个promise
    不再需要配合执行器
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

async function main () {
    try {
        const foo = await ajax('./api/foo.json')
        console.log(foo)
    
        const posts = await ajax('./api/posts.json')
        console.log(posts)
        // 创造一个异常
        const postt = await ajax('./api/postt.json')
        console.log(postt)
    } catch (e) {
        console.log(e)
    }
}

main()