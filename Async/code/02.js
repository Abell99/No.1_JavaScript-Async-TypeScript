/* 
    Promise
        一种更优的异步编程统一方案
*/

/* 
    Promise的基本使用
*/
// 这个类型的函数和以往的有些与不同，它需要接收一个函数(兑现承诺的逻辑)作为参数
const promise = new Promise(function (resolve, reject) {
    // 这里用来'兑现'承诺

    resolve('条件达成了') // 承诺达成 输出结果：resolved 条件达成了

    reject(new Error('promise rejected')) // 承诺失败 输出结果：rejected Error: promise rejected
})

// 实例化处理啊的承诺，可以通过then来获取回应。
promise.then(function (value) {
    console.log('resolved', value) // 返回成功的回应
}, function (error) {
    console.log('rejected', error) // 返回失败的回应
})

// 承诺的注意点：
//     无论失败与成功，都有其对应的回应
//     无论成功或者失败，结果不可逆