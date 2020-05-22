/* 
    Generator 异步解决方案回顾
*/

function * foo () {
    console.log('start')

    try {
        yield 'foo'
    } catch (e) {
        console.log(e)
    }
}

const generator = foo()

console.log(generator.next()) // 在生成器函数中，遇到yield会在执行完这一个yield之后暂停 // 输出结果：{value: "foo", done: false}

console.log(generator.throw(new Error('抛出了一个错误'))) // throw同样可以继续执行，不过打印出来的会是错误信息 // 输出结果：Error: 抛出了一个错误