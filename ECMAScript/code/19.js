/* 
    Generator 生成器
*/

/* 
    一种函数
    为了避免异步编程中回调嵌套过深而诞生，提供更好的异步编程解决方案
*/


// -------------------------------------------------
/* 
    定义一个生成器函数
        函数名前面加星号
*/
function * foo () {
    console.log('函数体开始执行了')
    return 100
}

const result = foo()
console.log(result) 
/*
node环境输出结果：
    Object [Generator] {} // 生成器对象
chrome环境输出结果：
    foo {<suspended>}
    __proto__: Generator
    __proto__: Generator
    constructor: GeneratorFunction {prototype: Generator, Symbol(Symbol.toStringTag): "GeneratorFunction", constructor: ƒ}
    next: ƒ next()  // 发现亮点
*/

// 试着进一步打印next()方法的执行结果
console.log(result.next()) // 输出结果：函数体开始执行了 { value: 100, done: true } // 发现亮点，拥有和迭代器next()方法的返回值相同的结构 函数中的返回值被放入value中

/* 
    以上内容得出结论：
        生成器对象也实现了迭代器的协议
*/

// --------------------------------------------------------
/* 
    生成器的基本作用
        关键词：
            yield: 
*/
function * foo () {
    console.log('第一次执行')
    yield 1
    console.log('第二次执行')
    yield 2
    console.log('第三次执行')
    yield 3
}

const generator = foo()

console.log(generator.next()) // 输出结果：第一次执行 { value: 1, done: false }
console.log(generator.next()) // 输出结果：第二次执行 { value: 2, done: false }
console.log(generator.next()) // 输出结果：第三次执行 { value: 3, done: false }
console.log(generator.next()) // 输出结果：第四次执行 { value: 4, done: true }

/* 
    分析：
        生成器的基本使用
        通过 * 将普通对象编程了生成器,通过调用生成器产生一个生成器对象
        生成器对象只能通过调用next()方法才能开始执行
        每使用next()方法，执行到yield关键词就会暂停下来
        yield后面的值，将会作为next的value结果返回
        且生成器对象只能惰性执行next()方法，因此需要多次执行next()方法才能执行完所有代码，next返回的done则变为true
*/


// ---------------------------------------------------------
/* 
    生成器的应用场景
*/

// -----------------------------
/* 
    案例一：发号器
        通过单击按钮，获取一个递增的返回结果
*/

function * createIdMaker () {
    let id = 1
    while (true) {
        yield id++
    }
}

const idMaker = createIdMaker() // 创建一个发号器

console.log(idMaker.next().value) // 输出结果：1
console.log(idMaker.next().value) // 输出结果：2
console.log(idMaker.next().value) // 输出结果：3
console.log(idMaker.next().value) // 输出结果：4

// -------------------------------
/* 
    案例二：使用Generator 函数实现 iterator 方法
*/
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶'],
    [Symbol.iterator]: function * () {
        const all = [...this.life, ...this.learn, ...this.work]
        // 因为Generator配合yield拥有和next()相同特性，因此可以使用generator来实现iterator方法
        for (const item of all) {
            yield item
        }
    }
}

for (const item of todos) {
    console.log(item)
}

// -------------------------------------------------
/* 
    关于Generator的主要作用，避免异步编程中回调嵌套过深，会在JavaScript异步编程中专门介绍
 */