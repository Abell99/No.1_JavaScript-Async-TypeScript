## 课程介绍

> Q：为什么要学习[ECMAScript](http://www.ecma-international.org/)?

> A：
>
> - 1.很多前端开发者并没理解语言和平台之间的关系。
> - 2.对ES的理解和掌握程度都不尽相同，在开展后面的课程之前，系统化的学习ECMAScript很有必要。
>
> - 是我们能够写出更现代化，更高质量的代码

### 内容概要

- ECMAScript与JavaScript
- ECMAScript的发展过程
- ECMAScript2015的新特性
- And more...

## 1·ECMAScript概述

- JavaScript**语言本身**指的就是ECMAScript，是一门脚本语言

- ES通常看作是JS的**标准化规范**，但实际上JS是ES的**扩展语言**

  - ES只提供了最基本的**语法**,约定代码该如何编写 

  - JS在ES语言标准的基础上，做出扩展，使我们在web浏览器环境下，可以操作BOM和DOM

  - JS在浏览器环境中(Web) = ES + Web APIs

    ![JavaScript与ES的关系](https://pics.images.ac.cn/image/5ebc08c8b8fad.html)

  - 在Node环境中(Node.js)，可以做一些读写文件之类的操作

  - JS在Node环境中 = ES + Node APIs 

    ![JS与node.js的关系](https://pics.images.ac.cn/image/5ebc0986e3494.html)

## 2·ES2015的学习

> Q：为什么要学习[ES2015](http://www.ecma-international.org/ecma-262/6.0/)？

> A:
>
> - **新特性**(颠覆性功能)较多------本模块学习的主要内容
>
> - 按版本号也称ES6，ES2015开始按年份命名
>   - 也有很多人喜欢用ES6泛指所有的新标准

### 变化概要

> ES2015相对于之前版本的主要变化
>
> 学习目标 🚩 ：在学习完本模块之后，需要根据这几个概要用自己的话描述出来

- 解决原有语法上的一些问题或者不足

- 对原有语法进行增强

- 全新的对象，全新的方法，全新的功能
- 全新的数据类型和数据结构

### 2.1·let、const与块级作用域

- **作用域**

  > 某个成员能够起作用的范围

  - 作用域的分类

    > ES2015新增**块级作用域**
    >
    > - 块：一对花括号所包裹的范围

    - 全局作用域
    - 函数作用域

    - 块级作用域

      > 引入的原因(痛点):
      >
      > 1. 以前块没有独立的作用域，因此定义在函数里面的变量，外边也能访问到

- **let**

  > 新的声明变量的关键词

  - 特性

    - 支持块级作用域

      - 内部声明的变量，外部无法访问

    - 变量声明不会提升

      > 什么是变量声明提升(痛点):
      >
      > 在函数后面声明的方法，却能调用到之后用var声明的变量，违背了代码执行从上到下的原则

- const

  > 恒量/常量
  >
  > 在let的基础上再次做出升级

  - 特性
    - 支持块级作用域
      - 内部声明的变量，外部无法访问
    - 变量声明不会提升
    - 只读
      - 声明后不可再做出修改

**最佳实践**，关于声明变量的关键词的使用

> 不用var，主用const，配合let

### 2.2·解构赋值

> 分别针对字符串数组，对象的解构赋值
>
> 以数组的解构赋值为基础，字符串与对象的解构赋值相同内容不做解释

- 数组的解构赋值

  > 以下为特性介绍

  - 基本的解构赋值

    - 格式示例

      ```js
      // 定义一个数组
      const arr = [1,2,3]
      ---------------------------
      const [ a, b, c, d ] = arr // 一对一按顺序匹配,没有匹配到的返回undefined
      console.log(a,b,c,d)
      ```

  - 支持空格占位

    - 格式示例

      ```js
      const [ , , c] = arr
      console.log(c)
      ```

  - 剩余参数`...`

    - 格式示例

      ```js
      const [ a, ...rest] = arr // 只能解构赋值的最后一个使用
      console.log(...rest) // 参数单独输出
      console.log(rest) // 以数组的格式输出
      ```

  - 默认值

    - 格式示例

      ```js
      const [ a, b = 3, c, d = 5] = arr
      console.log("b的默认值为3,解构赋值为:" + b)
      console.log("d的默认值为5,解构赋值为:" + d) // 默认值会被替换,如果数组中存在相应的位置的值的话
      ```

- 字符串的解构赋值

  > 基本与数组的解构赋值一样

  - 基本的解构赋值

    - 格式示例

      ```js
      const [a, b, c, d, e] = 'hello';
      console.log(a,b,c,d,e)
      ```

  - 支持空格占位
  - 剩余参数`...`
  - 默认值

  > 经典的应用场景
  >
  > 字符串的分割
  >
  > ```js
  > const path = 'a/b/c'
  > const [ ...rootdir ] = path.split('/')
  > console.log(rootdir)
  > ```

- 对象的解构赋值

  > 相比于数组的解构赋值，多了一个起别名
  >
  > 但是没有空格占位，因为对象本身就是无序的

  - 基本的解构赋值

    - 格式示例

      ```js
      // 定义一个对象
      const obj = { name: 'abel', sex: '男', age: 12 }
      ```

  - 剩余参数`...`

  - 默认值

  - 起别名

    - 格式示例

      ```js
      // 原本的属性名将会被顶替,无法使用
      const { name: Name } = obj
      console.log('我的名字是:' + Name)
      ```

  > 经典的应用场景
  >
  > 解构常用的方法
  >
  > ```js
  > const { log } = console
  > log('abc')
  > ```

### 2.3·模板字符串

> 相对于传统字符串的特性

- 模板字符串

  - 支持换行符

    > 支持标签的嵌入组合

    - 格式示例

      ```js
      const str = 
      `
          <div>
              <span></span>
          </div>
      `
      console.log(str)
      ```

  - 支持插值表达式`${}`

    > 插值表达式支持变量，运算，方法等

    - 格式示例

      ```js
      const name = 'abel'
      const math = function (year) {
          return year/12
      }
      const msg = `My name is ${ name }. Next year will be ${ 23 + 1 }.  24 is several times 12?: ${ math(24) }`
      console.log(msg)
      ```

  - 带标签的模板字符串

    > 模板字符串的加工

    - 格式示例

      ```js
      const name = 'abel'
      const age = 23
      function myAge (strings, name, age) {
          // strings 第一个参数接收所有的以插值表达式分割的字符串内容,并以数组的形式返回
          // console.log(strings, name, age)
          // 返回内容:
          // [ 'my name is ', ", I'm ", " years old , I'll be 28 in five years" ] abel 23
          // ---------------------
          return strings[0] + name + strings[1] + age + strings[2] + `I'll be ${ age + 5 } in five years `
      }
      const result = myAge`my name is ${ name }, I'm ${ age } years old.`
      console.log(result)
      // 返回内容
      // my name is abel, I'm 23 years old.I'll be 28 in five years 
      ```

### 2.4·字符串的扩展方法

> ES2015新增方法关于字符串

- includes()

  > 判断是否包含

  - 格式示例

    ```js
    console.log(message.includes('foo'))
    ```

- startsWith()

  > 判断是否以指定字段开头

  - 格式示例

    ```js
    console.log(message.startsWith('Error'))
    ```

- endsWith()

  > 判断是否以指定字段结尾

  - 格式示例

    ```js
    console.log(message.endsWith('.'))
    ```

### 2.5·函数形参列表的扩展方法

> 给函数的形参列表定义方法，帮助函数内部对于形参的处理

- 参数默认值

  > `||`短路运算的方式局限性大，很多情况不可以使用
  >
  > 判断是否未定义较为麻烦

  - 格式示例

    > 带有默认值的形参应该放在后面

    ```js
    function msg (name, age = 0, sex = '女') {
        console.log('my name is ' + name + ',age:' + age + ',sex:' + sex)
    }
    msg('abel',23,'男')
    ```

- 剩余参数`...`

  > 在之前，我们使用arguments对象（伪数组）来接收数量不明的参数。

  - 格式示例

    > 接收剩余的所有参数

    ```js
    function foo (a, b, ...args) {
        console.log(a,b,args) //输出结果:1 2 [ 4, 5, 6, 7, 8, 9 ]
        // 展开运算符的体验
        console.log(a,b,...args) //输出结果:1 2 4 5 6 7 8 9
    }
    foo(1,2,4,5,6,7,8,9)
    ```

  - 关于`...`的另一项功能

    > 也被用于进行展开数组，因此也称为**展开运算符**
    >
    > 以往如何展开(痛点)：
    >
    > - 根据下标依次输出
    >
    >   ```js
    >   console.log(arr[0], arr[1], arr[2])
    >   ```
    >
    > - `apply改变指向来输出`
    >
    >   ```js
    >   console.log.apply(console, arr)
    >   ```

    - 格式示例

      > 极为简便的展开数组

      ```js
      const arr = ['foo', 'bar', 'baz']
      console.log(...arr) // 输出结果:foo bar baz
      ```

### 2.6·箭头函数

> 全新的函数声明方式
>
> 关于箭头函数，`=>` 等字体显示的优化展示：FiraCode字体

- 简化函数定义

  - 基础格式的优化

  - 回调函数的优化(常用，推荐使用)

  - 格式示例

    ```js
    // 传统函数定义:
    function inc (number) {
        return number + 1
    }
    //箭头函数
    const inc = n => n + 1 //函数体如果只有只有单行且为参数以及运算符，默认为return, 多行函数体仍需花括号包住
    console.log(inc(1))
    
    // -----------------
    // 回调函数的优化
    const arr = [1, 2, 3, 4, 5, 6, 7]
    // 使用filter过滤函数筛选奇数
    arr.filter(function (item) {
        return item % 2
    })
    // 使用箭头函数作为回调函数
    arr.filter(i => i % 2)
    ```

- 关于`this`指向

  > 箭头函数不会改变this的指向

  - 箭头函数内部的this指向==外部的this指向

    > 由于此特性产生的一系列用法

    - 箭头函数无法通过this访问父级的参数，当然也无法直接调用
    - 箭头函数作为子函数可以通过`this`使用爷爷辈的参数

  - 格式示例

    ```js
    const person = {
        name: 'abel',
        // 普通函数中，this指向可以帮助函数在内部访问外部函数
        sayHi: function () {
            console.log(`hi,my name is ${this.name}`)
        },
        // 而在箭头函数中，this的指向未曾发生改变，就无法使用this来指向外部作用域的变量,当然也无法直接调用外部变量及方法
        // sayHello: () => {
        //     console.log(`hello,my name is ${name}`) // ×
        // },
        // 在函数嵌套函数的情况下，可以利用闭包的原理，也可以使函数的子函数调用到函数的父函数的变量以及方法，实现隔代遗传
        sayHiAsync: function () {
            // 以前如何将爷爷的参数传递给孙子
            // const _this = this
            // setTimeout(function () {
            //     console.log(_this.name)
            // }, 1000)
            setTimeout(()=> {
                console.log(this.name)
            }, 1000)
        }
    }
    person.sayHi()
    // person.sayHello()
    person.sayHiAsync()
    ```

### 2.7·对象字面量的增强

> 针对于定义对象属性及方法的改进

- 强行认儿子

  > 大饼卷万物，对象的属性和方法的定义也可以奉行拿来主义了。

  - 格式示例

    ```js
    const name = 'abel'
    const obj = {
        name,
        say:function () {
            console.log(`${this.name}虽然不是我定义的，但是我感觉他就是我儿子`)
        }
    }
    obj.say()
    ```

- 函数定义的简化

  > 砍掉了重复内容，function以及`:`号

  - 格式示例

    ```js
    const obj = {
        name: 'abel',
        say () {
            console.log(`我不是箭头函数，我仍然可以使用对象定义的属性:${this.name}`)
        }
    }
    ```

- 计算属性名

  > 属性名可以动态生成,关键符号 `[]`

  - 格式示例

    ```js
    const name = 'abel'
    const obj = {
        // name: 'abel', // 对象内部定义的不可以被计算属性名调用
        name,
        [name+'say']: '咱也不清楚最后是谁说的', // 计算机属性名可以支持运算，拼接等
        [name] () { //方法声明也可以使用计算属性名
            console.log('方法名也可以是计算属性名')
        }
    }
    console.log(obj.abelsay)
    obj.abel()
    ```

### 2.8·对象的扩展方法

> 对于对象的固有方法的一个扩展

- Object.assign()

  > 将多个源对象中的属性复制到一个目标对象中且存在覆盖行为
  >
  > 举个🌰：考试作弊，看一圈，没有写的我照抄，我写了的，擦了按抄过来的为准

  - 语法：`Object.assing('目标对象','源对象')`

  - 格式示例

    ```js
    // 我的答案
    const myAnswer = {
        no1: 'A',
        no3: 'D'
    }
    // 同学A的答案
    const myAStuderAnswer = {
        no1: 'C',
        no2: 'B',
        no3: 'D'
    }
    // 同学B的答案
    const myBStuderAnswer = {
        no1: 'C',
        no2: 'E',
        no3: 'F'
    }
    // 通过Object调用对象方法
    const result = Object.assign(myAnswer, myAStuderAnswer, myBStuderAnswer) // 第一个参数为目标对象，第二个参数开始为源对象
    console.log(myAnswer) //返回结果：{ no1: 'C', no3: 'F', no2: 'E' } 结论：存在覆盖且持续覆盖
    console.log(result === myAnswer) // Object.assign的返回值等于目标对象
    ```

  - 值得注意的地方

    > Object.assign属于对象浅拷贝，拷贝过来的数据不影响源对象的内容

  > 经典的应用场景
  >
  > 获取对象默认值
  >
  > 创建个体对象的时候，将模板导入，再根据个体专属属性进行修改

- Object.is()

  > 判断值是否相等，关于两个值是否想等最新的概念

  - 语法：`Object.is(值1, 值2)`

  - 格式示例

    > 罗列一些和`==` ,`===`之间判断的区别

    ```js
    console.log(NaN === NaN)  // 输出结果: false
    console.log(Object.is(NaN, NaN)) // 输出结果: true
    console.log(+0 === -0)  // 输出结果: true
    console.log(Object.is(+0, -0))  // 输出结果: false
    ```

  > 🗡议：平常判断两个值是否相等不建议使用

- Object.defineProperty()

  > 监视属性的读写行为
  >
  > Object.defineProperty()方法会直接在一个对象上定义**一个新属性**，或者修改一个对象的现有属性， 并返回这个对象。如果不指定configurable, writable, enumerable ，则这些属性默认值为false，如果不指定value, get, set，则这些属性默认值为undefined
  >
  > 举个🌰：vue(3.0以前)的双向数据绑定就是基于该方法实现的
  
  - 语法：`Object.defineProperty(obj, prop, descriptor)`
  
    - 参数
      - obj:需要被操作的目标对象
      - prop:目标对象需要定义或修改的属性的名称
      - descriptor:将被定义或修改的属性的描述符
  
  - 格式示例
  
    ```js
    var obj = new Object();
     
    Object.defineProperty(obj, 'name', {
        configurable: false,
        writable: true,
        enumerable: true,
        value: '张三'
    })
     
    console.log(obj.name)  //张三
    ```

- Object.defineProperties()

  > Object.defineProperties()方法直接在一个对象上定义**一个或多个**新的属性或修改现有属性，并返回该对象。

  - 语法：`Object.defineProperties(obj, props)`

    - 参数
      - obj:需要被操作的目标对象
      - prop:该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置

  - 格式示例

    ```js
    var obj = new Object();
    Object.defineProperties(obj, {
        name: {
            value: '张三',
            configurable: false,
            writable: true,
            enumerable: true
        },
        age: {
            value: 18,
            configurable: true
        }
    })
    console.log(obj.name, obj.age) // 张三, 18
    ```

### 2.9·Proxy（对象代理）

> vue3.0开始，就开始使用Proxy来实现数据的响应
>
> 门卫，读与写等众多操作的必经之路

- Proxy功能强大，方法众多

  > 常用方法如下所示

  - get
  - set
  - deleteProperty

  - 等等...

  - 格式示例

    ```js
    const person = { // 定义一个被监视的对象
        name: 'zce',
        age: 20
    }
    // new 一个门卫，返回一个拥有代理的对象
    const personProxy = new Proxy(person, { // 第一个参数为被监视的对象，第二个参数为代理对象本身的内容处理
        // 代理里面有两大方法
        // get 监控数据的读取
        get (target, property) {  // get的第一个参数为监控对象本身，第二个参数为读取的属性具体是哪一个
            // console.log(target, property) // 通过personProxy.name调用 结果返回：{ name: 'zce', age: 20 } name
            return property + '通过代理对象返回的值' // 根据查询来返回，还可以做一些修改
        },
        // set 监控数据的改变
        set (target, property, value) { // set的前两个参数与get相同,第三个参数为修改的属性需要修改的值
            if (property === 'age') {
                // 可以通过限制age只能设置为Int类型
                if (!Number.isInteger(value)) {
                    throw new TypeError(`${value} is not an int`)
                }
            }
            // 修改值
            target[property] = value
        }
    })
    // 测试数据的读取
    // personProxy.name
    // console.log(personProxy.name)
    
    // 测试数据的写入
    console.log(personProxy.age = 22)
    console.log(personProxy) // 修改的表面上是personProxy,但实际上是被监控的对象Person
    console.log(person)
    ```

- Proxy更好的支持数组对象的监视

  - 格式示例

    ```js
    const list = []
    const listProxy = new Proxy(list, {
        set (target, property, value) { // 通过push方法调用,property会根据后一个下标位置,添加新的数组对象
            // console.log('set', property, value)
            target[property] = value
            return true // 表示设置成功
        }
    })
    
    // 测试数组的添加功能
    listProxy.push(200)
    console.log(list)
    ```

- Proxy是以非侵入的方式监管了对象的读写

  > 这一个proxy的优势，再体验过Object.defineProperty()指定监视对象的属性之后才能够有所体会
  >
  > 是一个既有的优势

### 2.10·Reflect 统一的对象操作API

> Proxy虽然牛逼，但是方法太多了，不容易掌握，Reflect提供了一套统一的操作流程

- 注意
  - 与大多数全局对象不同，Reflect不是一个构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用
  - Reflect的所有属性和方法都是静态的（就像Math对象）。
  -  Reflect内部封装了一些列对对象的底层操作的方法。 Reflect成员方法就是Proxy处理对象的默认实现

- [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)的十三个方法

  > 十三太保注定要一统对象操作的江山，所以需要好好掌握，能用这十三个方法不用之气的对象方法
  >
  > `Reflect`对象提供以下静态函数，它们具有与[处理器对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)方法相同的名称。这些方法中的一些与 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 上的对应方法相同。

  - [`Reflect.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)
    - 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 [`Function.prototype.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 功能类似。

  - [`Reflect.construct()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct)
    - 对构造函数进行 [`new` ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)操作，相当于执行 `new target(...args)`。

  - [`Reflect.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty)
    - 和 [`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 类似。

  - [`Reflect.deleteProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)
    - 作为函数的[`delete`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)操作符，相当于执行 `delete target[name]`。

  - [`Reflect.get()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)
    - 获取对象身上某个属性的值，类似于 `target[name]。`

  - [`Reflect.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)
    - 类似于 [`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)。

  - [`Reflect.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf)
    - 类似于 [`Object.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)。

  - [`Reflect.has()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)
    - 判断一个对象是否存在某个属性，和 [`in` 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 的功能完全相同。

  - [`Reflect.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible)
    - 类似于 [`Object.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible).

  - [`Reflect.ownKeys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
    - 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), 但不会受`enumerable影响`).

  - [`Reflect.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions)
    - 类似于 [`Object.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)。返回一个[`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)。

  - [`Reflect.set()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)
    - 值分配给属性的函数。返回一个[`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)，如果更新成功，则返回`true`。

  - [`Reflect.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf)
    - 类似于 [`Object.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)。

- 格式示例

  > 十三个方法的初体验

  ```js
  // -------------------------------------------
  // 十三个方法的初体验
  // -------------------------------------------------
  // 对象声明
  let obj = {
      name: 'abel',
      sex: '男',
      age: 23,
      job: 'coder',
      say () {
          console.log('hello world')
      },
      // 定义一个getter访问器
      get did() { return `Abel 喜欢 ${this._did}`; },
      // 定义一个setter访问器
      set Old(val) { old = val + this.age; },
      get Old() { return old}
  }
  
  // ------------------------------------------
  /* Reflect.apply() 
  说明: 通过指定的参数列表发起对目标(target)函数的调用,改变this指向调用函数
  语法: Reflect.apply(target, thisArgument, argumentsList)
  参数说明:  
      target
           目标函数。
      thisArgument
           target函数调用时绑定的this对象。
      argumentsList
           target函数调用时传入的实参列表，该参数应该是一个类数组的对象。*/
  
  function func(myname) { // 唯一的形参是apply方法的第三个参数
      console.log('关键词`apply`: 改变了this执行,还可以传参,' + myname + "的性别是" + this.sex); // 通过apply改变了this的指向,将this指向了第二个参数obj
  }
  Reflect.apply(func, obj,["Abel"]) // 返回的结果为: Abel的性别是男
  
  // ----------------------------------------------
  
  /* Reflect.construct()
  说明: 该方法的作用和 new Date() 创建一个实列方法作用类似，那么使用该方法，我们就可以提供一种不使用new来调用构造函数的方法
  语法: Reflect.construct(target, argumentsList[, newTarget])
  参数说明: 
      target
           被运行的目标构造函数
      argumentsList
           类数组，目标构造函数调用时的参数。
      newTarget 可选
           新创建对象的原型对象， 参考 new.target 操作符，默认值为target。 */
  var date = Reflect.construct(Date, [2020, 5, 15]); // 当只有两个参数的时候,第三个参数,新创建参数的原型对象就是目标对象,目标函数(因此最好第一个参数就是构造函数就好了嘛)
  console.log('关键词`construct`: 实例化了一个Date对象,它可以调用构造函数Date的方法,今年是: ' + date.getFullYear()); // 实例化出来的对象,可以调用构造函数的方法
  
  // ----------------------------------------------
  /* Reflect.defineProperty()
  说明: 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回一个布尔值
  语法: Reflect.defineProperty(target, propertyKey, attributes)
  参数说明:
      target
          目标对象。
      propertyKey
          要定义或修改的属性的名称。
      attributes
          要定义或修改的属性的描述。 */
  const result_define = Reflect.defineProperty(obj, 'sex', {value: '女'}) // 第二个参数,属性名应为字符串格式,第三个参数,对象中的value,为对应的修改值
  console.log('关键词`defineProperty`: 修改obj的sex为女,结果为: ' + result_define)
  
  // -----------------------------------------------
  /* Reflect.deleteProperty()
  说明: 用于删除属性,并返回一个布尔值
  语法: Reflect.deleteProperty(target, propertyKey)
  参数说明: 
      target
           删除属性的目标对象。
      propertyKey
           需要删除的属性的名称。 */
  const result_delect = Reflect.deleteProperty(obj, 'job')
  console.log('关键词`delectProperty`: 删除了obj的job属性,结果为: ' + result_delect)
  
  // ----------------------------------------------
  /* Reflect.get()
  说明: 读取属性,并返回属性值
  语法: Reflect.get(target, propertyKey[, receiver])did
  参数说明:
      target
           需要取值的目标对象
      propertyKey
           需要获取的值的键值
      receiver
           如果target对象中指定了getter，receiver则为getter调用时的this值。 */
  const result_get = Reflect.get(obj, 'did', { _did: '打豆豆' }) // 如果第二个参数指向是一个getter访问器，此访问器的this是指向第三个参数的
  console.log('关键词`get`: 获取了abel的喜好,是通过第三个参数传进去的: ' + result_get)
  
  // -----------------------------------------------
  /* Reflect.getOwnPropertyDescriptor()
  说明: 获取属性的详细描述,返回属性的描述符
  语法: Reflect.getOwnPropertyDescriptor(target, propertyKey)
  参数说明:
      target
          需要寻找属性的目标对象。
      propertyKey
          获取自己的属性描述符的属性的名称。 */
  const result_getDescriptor = Reflect.getOwnPropertyDescriptor(obj, 'name')
  console.log('关键词`getOwnPropertyDescriptor`: 可以准确的获取一个属性的描述符: ' + result_getDescriptor)
  // console.log(result_getDescriptor)
  
  // ---------------------------------------------
  /* Reflect.getPrototypeOf()
  说明: 返回指定对象的原型 (即内部的 [[Prototype]] 属性的值)
  语法: Reflect.getPrototypeOf(target)
  参数说明:
      target
          获取原型的目标对象。 */
  const result_getPrototy = Reflect.getPrototypeOf(obj)
  console.log('关键词`getPrototypeOf`: 可以获取示例对象的原型,例如实例对象obj的原型为: ' + result_getPrototy)
  // console.log(result_getPrototy)
  
  // ---------------------------------------------
  /* Reflect.has()
  说明: 用于检查一个对象是否拥有某个属性,返回一个布尔值
  语法: Reflect.has(target, propertyKey)
  参数说明:
      target
          目标对象.
      propertyKey
          属性名，需要检查目标对象是否存在此属性。 */
  const result_has = Reflect.has(obj, 'name')
  console.log('关键词`has`: 可以查目标对象是否存在此属性,例如实例对象obj中有name属性: ' + result_has)
  
  // -------------------------------------------
  /* Reflect.isExtensible()
  说明: 判断一个对象是否可扩展 （即是否能够添加新的属性）
  语法: Reflect.isExtensible(target)
  参数说明:
      target
          检查是否可扩展的目标对象。 */
  const result_Extensible = Reflect.isExtensible(obj)
  console.log('关键词`isExtensible`: 可以查目标对象是否可以扩展,例如对象obj可以扩展: ' + result_Extensible)
  
  // --------------------------------------------
  /* Reflect.ownKeys()
  说明: 返回一个由目标对象自身的属性键组成的数组。
  语法: Reflect.ownKeys(target)
  参数说明:
      target
          获取自身属性键的目标对象。 */
  const result_Ownkeys = Reflect.ownKeys(obj)
  console.log('关键词`ownKeys`: 获取自身属性键的目标对象,例如对象obj的自身属性键组成的数组为: ' + result_Ownkeys)
  
  // ---------------------------------------------
  /* Reflect.preventExtensions()
  说明: 阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。返回一个布尔值
  语法: Reflect.preventExtensions(target)
  参数说明:
      target
          阻止扩展的目标对象 */
  const result_noExtensible = Reflect.preventExtensions(obj)
  console.log('关键词`preventExtensions`: 可以设置对象不可以扩展,例如对象obj将不再可以扩展: ' + result_noExtensible)
  
  // -----------------------------------------------
  /* Reflect.set()
  说明: 设置一个属性,返回布尔值
  语法: Reflect.set(target, propertyKey, value[, receiver])
  参数说明:
      target
          设置属性的目标对象。
      propertyKey
          设置的属性的名称。
      value
          设置的值。
      receiver
          如果遇到 setter，receiver则为setter调用时的this值。 */
  const result_set = Reflect.set(obj, 'Old', 5 , { age: 18 }) //如果是一个setter访问器，此访问器的this是指向第四个参数的。
  console.log('关键词`set`: 可以设置对象的设置一个属性: ' + result_set + ',通过setter修改的值为:' + Reflect.get(obj, 'Old'))
  
  // --------------------------------------------------
  /* Reflect.setPrototypeOf()
  说明: 设置对象的原型（即内部的 [[Prototype]] 属性）为另一个对象或 null,返回 一个布尔值
  语法: Reflect.setPrototypeOf(target, prototype)
  参数说明:
      target
          设置原型的目标对象。
      prototype
          对象的新原型（一个对象或 null）。  */
  const result_setPrototype = Reflect.setPrototypeOf(obj, Object.prototype)
  console.log('关键词`setPrototypeOf`: 可以设置对象的原型为一个对象或 null: ' + result_setPrototype)
  ```

### 2.11·Promise 一套更优的异步解决方案

> 本节内容，单拎出来

### 2.12·class类

> 老牌的面向对象语言都有的class类

- 定义class类

  - 实例方法vs静态方法
    - 实例方法：通过类构造出来的实例对象去调用
    - 静态方法`static`：直接通过类本身去调用
      - 以前通过在构造函数对象上挂载方法来实现

  - 格式示例

    ```js
    class Person {
        // 构造器里面放属性
        constructor (name, sex) {
            this.name = name
            this.sex = sex
        }
        // 定义方法
        say () {
            console.log(`hi,my name is ${this.name} i am a ${this.sex}`)
        }
    
        // ES2015中新增添加静态成员的static关键词
        static create (name, sex) {
            return new Person(name, sex)
        }
    }
    
    // 实例化对象
    const abel = new Person('abel','man')
    abel.say()
    
    // 通过静态方法实例对象
    const tom = Person.create('tom', 'man')
    tom.say()
    ```

- 继承

  > 以前通过原型的方式来实现继承,真得是挺乱的

  - 通过extends来继承父类

  - 通过super方法来访问父类成员

  - 格式示例

    ```js
    class Student extends Person {
        constructor (name, age) {
            // 使用super访问父类
            super(name)
            this.age = age
        }
        hello () {
            super.say() // 但是字类为访问的无法获取 hi,my name is doinb i am a undefined
            console.log(`age: ${this.age}`)
        }
        static create (name, age) {
            return new Student(name, age)
        }
    }
    const doinb = Student.create('doinb', '23')
    doinb.hello()
    ```

### 2.13·Set 数据结构

> 类似一个数组，但是不允许数组成员重复

- set 数据结构常用方法

  - set.add(value)
    - 添加一个值，返回set结构本身
  - set.delete(value)
    - 删除指定数据，返回布尔值
  - set.has(value)
    - 判断该值是否存在，返回布尔值
  - set.clear()
    - 清除所有数据，没有返回值
  - set.keys()
    - 返回键名遍历器
  - set.entries()
    - 返回键值对遍历器
  - 循环遍历：forEach/for of

- 格式示例

  ```js
  // 类似于数组，但是组内成员不允许重复
  const s = new Set()
  
  // 常用方法：
  /* 
      set.add(value) 添加一个值，返回set结构本身
  */
  s.add(1).add(2).add(3).add(4).add(1) // 重复的值将被忽略
  console.log(s) // 输出结果： Set(4) { 1, 2, 3, 4 }
  
  /* 
      set.delete(value) 删除指定数据，返回布尔值
  */
  console.log(s.delete(1)) // 输出结果：true
  
  /* 
      set.has(value) 判断该值是否存在，返回布尔值
  */
  console.log(s.has(2)) // 输出结果：true
  
  /* 
      set.clear() 清除所有数据，没有返回值
  */
  // s.clear()
  console.log(s) // 如果执行的话，输出结果： Set(0) {}
  
  /* 
      set.keys() 返回键名遍历器
  */
  console.log(s.keys()) // 输出结果：[Set Iterator] { 2, 3, 4 }
  
  /* 
      set.entries() 返回键值对遍历器
  */
  console.log(s.entries()) // 输出结果：[Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }
  
  /* 
      循环遍历：forEach/for of
  */
  for (let i of s) { console.log(i) } // 输出结果：2 3 4
  ```

  

> 经典的应用场景
>
> 普通数组去重
>
> ```js
> const arr = [...new Set([1, 2, 3, 4, 5, 6, 1, 2, 3])]
> console.log(arr) // 输出结果： [ 1, 2, 3, 4, 5, 6 ]
> ```

### 2.14·Map 数据结构

> 类似于对象
>
> 都是键值对的集合
>
> 对键的范围的升级，**允许使用其他类型**，例如：对象，数组，布尔类型（对象的键只能是字符串，如果不是也会转换为字符串）

- map数据结构常用方法

  - map.set(key,value)
    - 设置键名key对应的键值为value，然后返回map。
  - map.get(key)
    - 根据键名，获取并返回对应的值
  - map.has(key)
    - 判断某个键是否再当前的map对象中，返回一个布尔类型

  - map.delete(key)
    - 删除某个键，返回一个布尔值
  - map.clear()
    - 清空Map对象 无返回值
  - map.keys()
    - 返回键名的遍历器
  - map.values()
    - 返回键值的遍历器
  - map.entries()
    - 返回所有成员的遍历器
  - 循环遍历
    - map.forEach()/for of

- 格式示例

  ```js
  const m = new Map()
  const obj = {
      name: 'abel',
      age: 23
  }
  // ---------------------------------------------------
  // 常用方法
  /* 
      map.set(key,value) 设置键名key对应的键值为value，然后返回map。
  */
  
  console.log(m.set(obj, '是一个人')) // 输出结果：Map(1) { { name: 'abel', age: 23 } => '是一个人' }
  
  /* 
      map.get(key) 根据键名，获取并返回对应的值
  */ 
  console.log(m.get(obj)) // 输出结果：是一个人
  
  /* 
      map.has(key) 判断某个键是否再当前的map对象中，返回一个布尔类型
  */
  console.log(m.has(obj)) // 输出结果：true
  
  /* 
      map.delete(key) 删除某个键，返回一个布尔值
  */
  console.log(m.delete(obj)) // 输出结果：true
  
  /* 
      map.clear() 清空Map对象 无返回值
  */
  console.log(m.clear()) // 输出结果：undefined
  
  // ---------------------------------------------------
  // 为了更好的展示遍历结果，添加几个键值对
  m.set(obj, '是一个对象')
  m.set([1,2,3], '是一个数组')
  m.set('abel', '是一个字符串')
  m.set(true, '是一个布尔类型')
  /* 
      map.keys() 返回键名的遍历器
  */
  console.log(m.keys()) // 输出结果：[Map Iterator] { { name: 'abel', age: 23 }, [ 1, 2, 3 ], 'abel', true }
  
  /* 
      map.values() 返回键值的遍历器
  */
  console.log(m.values()) // 输出结果：[Map Iterator] { '是一个对象', '是一个数组', '是一个字符串', '是一个布尔类型' }
  
  /* 
      map.entries() 返回所有成员的遍历器
  */
  console.log(m.entries()) 
  /* 输出结果：
      [Map Entries] {
          [ { name: 'abel', age: 23 }, '是一个对象' ],
          [ [ 1, 2, 3 ], '是一个数组' ],
          [ 'abel', '是一个字符串' ],
          [ true, '是一个布尔类型' ]
      } */
  
  /* 
      map.forEach() 遍历数组
  */
  m.forEach((value, key) => {
      console.log(key, value)
  })
  /* 输出结果：
      { name: 'abel', age: 23 } 是一个对象
      [ 1, 2, 3 ] 是一个数组
      abel 是一个字符串
      true 是一个布尔类型 */
  ```

### 2.15·Symbol 一种全新的原始数据类型

> symbol翻译过来就是 符号，它表示一个独一无二的值
>
> ​    目前存在的数据类型：
>
> ​        基本类型：String、Number、Boolean、Symbol、Undefined、Null (正在标准化的类型：BigInt)
>
> ​        引用类型：Object(object,array,function)

- 特点
  - 全新的数据类型
  
  - 独一无二，自己都不等于自己
  
  - 括号内的是描述，区分不同的Symbol
  
- 可以作为对象的属性名(作为私有属性绝佳)
  
  - 通过`for`方法来复用属性（属性值为字符串）
  
  - 唯一的获取方法`Object.getOwnPropertySymbols(对象名)`
  
  - 内置常量
  
    > 用来实现js内部接口
  
    - Symbol.iterator
    - Symbol.hasInstance
    - Symbol.toStringTag
  
- 格式示例

  ```js
  /* 
      全新的数据类型
  */
  const s = Symbol()
  console.log(typeof s) // 输出结果: symbol
  
  /* 
      独一无二
  */
  const y = Symbol()
  console.log(s === y) // 输出结果: false
  
  /* 
      括号里面填的是描述
  */
  console.log(Symbol('abel')) // 输出结果: Symbol(abel) // 和字符串一样的颜色绿色
  
  /* 
      作为属性名
  */
  const obj = {}
  obj[Symbol('name')] = 'abel'
  obj[Symbol('sex')] = 'man'
  console.log(obj) // 输出结果: { [Symbol(name)]: 'abel', [Symbol(sex)]: 'man' }
  
  /* 
      for复用
  */
  const s1 = Symbol.for('foo')
  const s2 = Symbol.for('foo')
  console.log(s1 === s2) // 输出结果: true
  
  /* 
      Object.getOwnPropertySymbols(对象名) 获取对象中是symbol类型的属性名
  */
  console.log(Object.getOwnPropertySymbols(obj)) // 输出结果: [ Symbol(name), Symbol(sex) ]
  ```

> 经典的应用场景
>
> 为对象添加一个独一无二的属性名作为私有属性
>
> 毕竟它自己都不等于自己，别人也访问不到
>
> ```js
> console.log(Symbol() === Symbol()) // 输出结果: false
> // a为私有属性
> const a = Symbol()
> const o = {
>     a: 'abc',
>     say () {
>         console.log(this.a)
>     }
> }
> o.say() // 输出结果：abc
> ```

### 2.16·Iterable 可迭代接口

> ES中能够表示有结构的数据类型越来越多
>
> ​        例如: object,array,set,map,自定义组合使用
>
> ​    为了给各种各样的数据结构提供统一的遍历方式
>
> ​        就要统一遍历接口
>
> ​    实现iterable接口就是for...of的前提

- iterable实现原理的分析

  ```js
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
      查看iterator方法的内容的实现
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
  ```

- 实现可迭代接口

  > 处理没有默认实现iterable的数据结构类型,让for-of能够真正的做到遍历所有的数据结构类型

  - 格式示例

    ```js
    // 三层接口,实现迭代器
    const obj = { 
        // 定义一个用于迭代的数组
        store: ['foo', 'bar', 'baz'],
        // 第一层,iterable,实现可迭代接口,规定内部必须有一个用于返回迭代器的方法,iterator
        [Symbol.iterator]: function () {
            let index = 0
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
    ```

- 迭代器模式

  > 根据下面的示例模式，可以实现任何的数据结构的迭代

  - 格式示例

    ```js
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
    ```

### 2.17·for-of 循环

> 全新的遍历方式
>
> 可以作为今后遍历所有数据结构的统一方式(前提是都通过iterable进行接口处理)

- 特点
  
  - break 关键词可以随时终止遍历
  
- 默认已经经过iterable，可以直接使用for...of

  - 数组
  - set
  - map

- 遍历数组

  - 格式示例

    ```js
    /* 
        遍历Array
    */
    const arr = [100, 200, 300]
    for (const item of arr) {
        if (item > 100) {
            break // break 关键词可以随时终止遍历
        }
        console.log(item) // 返回的是值
    }
    
    // -------------------------------------
    /* 
        遍历Map
    */
    // 此处为练习使用map数据结构
    const arrD = new Map()
    arrD.set({ name: 123 }, '456')
    arrD.set( 'abc', 'deg' )
    arrD.set( true, 'ok' )
    arrD.set( ['a', 'b'], ['c', 'd', 'e'] )
    // console.log(arrD)
    
    for (const [key, value] of arrD) {
        console.log(`键来:${ key },值来: ${ value }`)
    }
    
    // ------------------------------------------
    /* 
        遍历Set
    */
    const s = new Set()
    s.add(1).add(2).add(3).add(4)
    for (const item of s) {
        console.log(item)
    }
    ```

### 2.18·Generator 生成器

> 一种函数
>
> 为了避免异步编程中回调嵌套过深而诞生，提供更好的异步编程解决方案

- 普通函数，函数名前面加`*`即可形成最基础的生成器函数

- 关键词

  - yield

- 应用场景

  - 发号器

  - 使用Generator函数实现iterator方法

- 关于回调函数嵌套过深的问题，放在异步编程中详细描述

- 格式示例

  ```js
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
  ```

### 2.19·ES Modules 语言层面的模块化标准

> 所谓语言层面，就是模块化标准的实现原理

- 在模块化开发部分详细描述

## 3·ES2016的学习

> 小版本，只有两个小功能

### 3.1· .includes() 包含否

> Array.prototype.includes()
>
> 轻松愉快的检测出数组是否包含指定的元素

- 与以前常用的indexOf()方法的区别

  - 返回布尔值
  - 可以查找NaN

- 格式示例

  ```js
  /* 
      Array.prototype.includes
          包含否
  */
  const arr = [1, 'abc', NaN, false]
  
  // 与indexOf()的区别
  console.log(arr.indexOf(NaN)) // 输出结果： -1
  console.log(arr.includes(NaN)) // 输出结果： true
  ```

### 3.2·`**` 指数运算

- 老牌的指数运算：Math.pow()
- 格式：`底数 ** 指数`

- 格式示例

  ```js
  /* 
      `**` 新的指数运算符
  */
  
  // 老牌的指数运算，为Math中的pow方法
  console.log(Math.pow(2,3)) // 输出结果 8
  console.log(2 ** 3) // 输出结果 8
  ```



## 4·ES2017的学习

> 比2016大一点的小版本 主要为Object的扩展方法

### 4.1·Object.values

> 返回对象中所有的值组成的数组

- 语法：`Object.values(目标对象)`

- 格式示例

  ```js
  /* 
      Object.values
          返回对象中所有的值组成的数组
  */ 
  console.log(Object.values(obj)) // 输出结果：[ 'value1', 'value2' ]
  ```

### 4.2·Object.entries

> 将对象中的所有键值对通过数组的形式返回

- 语法：`Object.entries(目标对象)`
- 常规使用
  - 返回值用于for...of循环
  - 返回值用于转换Map数据结构

- 格式示例

  ```js
  /* 
      Object.entries
          将对象中的所有键值对通过数组的形式返回
  */
  console.log(Object.entries(obj)) // 输出结果：[ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]
  // 案例一：
      // 可以使用Object.entries返回的结果，通过for...of循环遍历对象
      for (const [key, value] of Object.entries(obj)) {
          console.log(key, value)
          /* 输出结果：
              foo value1
              bar value2 */
      }
  // 案例二：
      // 根据Object.entries的返回结果可以观察到，这契合了Map数据结构的要求，因此可以通过entries的返回值，将对象转换为Map数据结构
      console.log(new Map(Object.entries(obj)))
          /* 输出结果：
              Map(2) { 'foo' => 'value1', 'bar' => 'value2' } */
  ```

### 4.3·Object.getOwnPropertyDescriptors

> 获取对象的完整描述信息,完善ES2015中get，set的使用

- 语法：`Object.getOwnPropertyDescriptors(目标对象)`

- 常规使用

  - 优化对象的复制，使git，set可以正常复制

- 格式示例

  ```js
  /* 
      Object.getOwnPropertyDescriptors
          获取对象的完整描述信息,完善ES2015中get，set的使用
  */
  const p1 = {
      firstName: '狗蛋',
      lastName: '李',
      get fullName () {
          return this.firstName + ' ' + this.lastName
      }
  }
  // Object.assing() 复制对象后，get，set存在的问题
      const p2 = Object.assign({}, p1)
      p2.firstName = '逍遥' // 修改p2 中的值
      console.log(p2)
      /* 输出结果：
          { firstName: '逍遥', lastName: '李', fullName: '狗蛋 李' }
          结果分析:
              fullName通过assign复制，只是复制了值。 */
  // 使用Object.getOwnPropertyDescriptors来解决上面的问题
      const descriptors = Object.getOwnPropertyDescriptors(p1)
      /*  console.log(descriptors)
          输出结果：
              {
                  firstName: { value: '狗蛋', writable: true, enumerable: true, configurable: true },
                  lastName: { value: '李', writable: true, enumerable: true, configurable: true },
                  fullName: {
                      get: [Function: get fullName],
                      set: undefined,
                      enumerable: true,
                      configurable: true
                  }
              }
      */
      // 通过获取对象的完整信息之后，再复制的对象，就可以完整复制set，get的使用效果
      const p3 = Object.defineProperties({}, descriptors)
      p3.firstName = '逍遥'
      console.log(p3.fullName) // 输出内容：逍遥 李
  ```

### 4.4·String.prototype.padStart / String.prototype.padEnd

> 字符串填充方法，用给定的字符串去填充目标字符串的开始或结束位置

- 语法：`str.padStart(targetLength [, padString]) / str.padEnd(targetLength [, padString])`

  - 参数
    - targetLength ：约定的补全长度
    - padString：约定的补全内容

- 格式示例

  ```js
  /* 
      String.prototype.padStart / String.prototype.padEnd
          字符串填充方法，用给定的字符串去填充目标字符串的开始或结束位置
  */
  const books = {
      html: 5,
      css: 16,
      javaSctipt: 111
  }
  for (const [name, count] of Object.entries(books)) {
      console.log(`${name.padEnd(16, '-')}=>${count.toString().padStart(3, '0')}`)
  }
  /* 输出内容
      html------------=>005
      css-------------=>016
      javaSctipt------=>111 */
  ```

### 4.5·在函数参数中添加尾逗号

> 允许尾逗号的存在

- 格式示例

  ```js
  /* 
      允许尾逗号的存在
  */
  const arr = [
      1,
      2,
      3,
  ]
  console.log(arr)
  const abc = {
      a: 'a',
      b: 'b',
      c: 'c',
  }
  console.log(abc)
  function foo(a,b,c,) {
      console.log('函数的参数也有尾逗号')
  }
  foo(1,2,3)
  ```

### 4.6·Async / Await

> 小版本中的重量级更新部分，用于异步处理的进一步优化
>
>  彻底解决异步回调函数嵌套过深的问题
>
>  本质：promise的语法糖

- 在异步函数模块详细描述