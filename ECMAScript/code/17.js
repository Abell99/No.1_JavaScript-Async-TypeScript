/* 
    iterable 可迭代接口
*/

/* 
    ES中能够表示有结构的数据类型越来越多
        例如: object,array,set,map,自定义组合使用
    为了给各种各样的数据结构提供统一的遍历方式
        就要统一遍历接口

    实现iterable接口就是for...of的前提
*/

/* 
    内部已经实现iterable的三种数据结构
        array,set,map
    控制台输入:
        console.log([])
        console.log(new Set())
        console.log(new Map())
    都可以在原型上面找到
        Symbol(Symbol.iterator) 方法
*/

/* 
    查看iterable方法的内容的实现
    控制台输入:
        const arr = ['a', 'b', 'c']
        arr[Symbol.iterator]()
    控制台返回:
        Array Iterator {}
            => next() // 确认目标
    控制台输入:
        const iterator = arr[Symbol.iterator]()
        iterator.next()
    控制台返回:
        { value: "a", done: false } // 可以观察到第一个属性就是我们定义的arr的值
    控制台输入:
        iterator.next() // 持续输入,内部维护的指针将把数组中的内容依次返回
        最后: { value: undefined, done: true } // done表示着内部数据是否为空
*/

/* 
    总结: //也是for...of循环的工作原理
        所有可以直接被for...of循环遍历的数据类型,都实现了iterator的接口.
        该数据结构类型内部必定挂载了iterator方法
        iterator方法返回了一个带有next()方法的对象
        通过持续的反复调用next()方法,直到done为true,就可以完成完整的遍历一遍了
*/

/* 
    实现一个迭代器
*/

// 三层接口,实现迭代器
const obj = { 
    // 定义一个用于迭代的数组
    store: ['foo', 'bar', 'baz'],
    // 第一层,iterable,实现可迭代接口,规定内部必须有一个用于返回迭代器的方法,iterator
    [Symbol.iterator]: function () {
        // 定义指针
        let index = 0
        // 定义本身,数组本身
        const self = this
        // 第二层,iterator,实现迭代器接口,规定内部必须有一个用于迭代的next()方法
        return {
            next: function () {
                const result = {
                    value: self.store[index],
                    done: index >= self.store.length
                }
                index++
                // 第三层,iterationResult,迭代结果接口,规定必须有一个value属性,用来表示当前被迭代到的数据,一个done属性,用来表示迭代有没有结束
                return result 
            }
        }
    }
}

for (const item of obj) {
    console.log('循环体', item)
}

/* 
    迭代器模式
*/

// 实现，对外提供统一接口
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文','数学','外语'],
    work: ['喝茶'],    
    
    // each方法的实现
    each: function (callback) {
        const all = [].concat(this.life, this.learn, this.work)
        for (const item of all) {
            callback(item)
        }
    },

    // iterator方法的实现
    [Symbol.iterator]: function () {
        const all = [...this.life, ...this.learn, ...this.work]
        let index = 0
        return {
            next: function () {
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}

console.log('---------------------------------------')

todos.each(function (item) {
    console.log(item)   
})

console.log('---------------------------------------')

for(const item of todos) {
    console.log(item)
}
