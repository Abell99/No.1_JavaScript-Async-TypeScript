/* 
    Promise链式调用
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

//获取通过then处理一次过后的返回值
var promise2 = promise.then(function (value) {
    console.log('resolved', value) // 返回成功的回应
}, function (error) {
    console.log('rejected', error) // 返回失败的回应
})
/* 
    在以往我们使用链式调用，是因为使用的方法没有改变this执行，就是说经过某个方法，返回的依旧是原本的对象本身
    但是，
        promise中，通过then处理的promise并不是原来的promise，而这也正是promise链式调用的关键所在
        通过then的处理，返回处理过后的promise，从而解决回调地狱问题
*/
console.log(promise === promise2) // 返回结果：false

// 关于then的返回值
console.log('------------------------------------------------')
promise
    .then(
        function (value) {
            // 无返回值
            console.log('无返回值')
            console.log(value)
        }
    )
    .then(
        function (value) {
            console.log('返回一个promise类型的数据')
            return promise
        }
    )
    .then(
        function (value) {
            console.log('在这次回调中返回一个非promise类型的数据')
            return value + '并在此返回一个非promise类型的数据'
        }
    )
    .then(
        function (value) {
            console.log('接收一个非promise类型的数据: ' + value)
        }
    )