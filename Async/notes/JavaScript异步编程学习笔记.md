# 异步编程是什么？

> 单线程JavaScript异步方案
>
> - 总所周知JavaScript是单线程的
>
> - 采用单线程模式工作的原因
>
>   > 最早是运行在浏览器端的脚本语言，目的就是用来实现页面中的动态交互，而实现页面交互的核心就是DOM操作，而这就决定了它必须使用单线程模型，否则就会出现很复杂的线程同步问题(举个🌰：多线程同时操作一个dom元素，一个删除一个修改，浏览器就无法判断应该以哪一个线程的结果为准)
>
> - 单线程的表现形式
>   - JS执行环境中负责执行代码的线程只有一个
>   - 先来后到排队，遇到一个超级耗时的任务，将严重影响后面的任务进程，出现假死的情况（异步应运而生）

# 内容概要

- 同步模式与异步模式
- 事件循环与消息队列
- 异步编程的几种方式
- Promise异步方案、宏任务/微任务队列
- Generator异步方案、Async/Await语法糖

# 1·同步模式与异步模式

> JavaScript将任务的执行模式分成了两种

- 同步模式(Synchronous)
- 异步模式(Asynchronous)

> 根据运行环境提供的API是以同步还是异步模式的方式工作来区分

## 1.1·同步模式

> ​	代码中的任务依次执行，后面的任务必须等待前面的任务执行结束，才能开始执行，代码中的大多数任务采取的是同步执行模式

## 1.2·异步模式

> ​	异步模式下，不会去等待一个任务的结束才开始下一个任务。对于耗时的任务，在开启过后就会立即往后执行下一个任务，后续逻辑一般会通过回调函数的方式去定义(耗时任务在内部执行完成之后就会执行回调)。

- 如果没有异步执行模式，单线程的JavaScript就无法同时处理大量的耗时任务

- 异步执行会遇到的问题

  - 代码的执行顺序混乱

    > 众多面试题的设计灵感来源。

- JavaScript是单线程的，但是浏览器并非是单线程的，浏览器内部的API会有单独的线程去执行这些耗时的操作

> 逻辑过程中的名称:
>
> ​	Call stack: 执行栈，调用栈
>
> ​	Web APIs:用于罗列异步任务
>
> ​	Queue:消息队列，给异步任务排序
>
> ​	Event loop:事件循环机制，当调用栈为空的时候，依次将消息队列中的函数任务调往执行栈
>
> 逻辑总结:
>
> ​	在代码执行的过程中，执行栈先进行压栈（控制执行栈不为空，暂不调用消息队列），在遇到同步任务的时候放到执行栈中并执行，在遇到异步任务的时候，先罗列到Web APIs中。待同步任务全部执行完毕之后，撤销压栈，将罗列的异步任务按时间先后在消息队列中排列，通过事件循环机制依次调到执行栈并执行，遇到新的异步任务的时候，可以根据时间在消息队列中进行加塞。

![逻辑图解](https://pics.images.ac.cn/image/5ec40ff668b7e.html)

# 2·回调函数

> 回调函数：
>
> ​	所有异步编程方案(为js异步而生的语法)的根基
>
> ​	调用者定义回调函数，执行栈执行这个函数，其实就是调用者告诉执行者异步任务结束之后应该做什么

- 最基本的回调方式

  ```js
  /* 
      最早的回调函数
          通过传递回调参数实现
  */
  function foo (callback) {
      setTimeout(function () {
          callback()
      }, 3000)
  }
  // 调用函数，并传递回调参数
  foo(function () {
      console.log('这就是一个回调函数，调用者定义这个函数，执行栈执行这个函数，其实就是调用者告诉执行者异步任务结束之后应该做什么')
  })
  ```

# 3·Promise异步方案

> Promise(承诺)：
>
> ​	一种更优的异步编程统一方案
>
> 解决的痛点：
>
> ​	传统的回调方式无法完成复杂的回调逻辑，会造成回调地狱的情况
>
> CommonJS社区首次提出了Promise的规范用于解决回调地狱，在ES2015中被标准化，成为语言规范
>
> 概念：
>
> ​	君子一诺千金，Promise的回调拥有两种，失败与成功，定义了成功如何，失败又如何的行事原则。

## 3.1·Promise的基本用法

> Promise代码层面的基本使用
>
> Promise也可以说是ES2015所提供的一个**全局类型**，可以通过它来实例出新的承诺

- Promise的注意点：

  - 无论成败，都应有回应
  - 无论成败，都不可逆

- 格式示例

  ```js
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
  ```

## 3.2·Promise的使用案例

> Promise 方式的 AJAX

- 格式示例

  ```js
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
  ```

## 3.3·Promise链式调用

> 不同以往的链式调用：
>
> ​	通过then的处理，返回处理过后的promise，从而解决回调地狱问题

- 链式调用
  - Promise对象的then方法会返回一个全新的Promise对象
  - 后面的then方法就是在为上一个then返回的peomise注册回调
  - then的return返回内容
    - 无返回值，则操作的就是上一个处理过后的
    - 类型依旧为`promise`,则下一个then处理的就是返回的这个,并且会排队等待返回的promise结束之后再处理
    - 并非`promise`类型，则是下一个then的参数

- 格式示例

  ```js
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
  ```

## 3.4·Promise异常处理

> 处理异常的三种方式

- 异常的回调函数

  - then的第二个函数
  - 紧跟在每一个then后面的catch
  - 全局对象的unhandledrejection统一处理（不推荐使用）
    - 推荐在代码中明确的捕获每一个可能的异常

- 前两种回调方法的不同点

  - then的第二个函数只捕获上一个promise的错误
  - catch捕获前面的所有promise的错误

- 格式示例

  ```js
  /* 
      Promise异常处理
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
      .then(
          function (res) {
              console.log(res)
              // 返回一个错误的promise
              return ajax('./api/abel.json')
          },
          function (error) {
              console.log(error + ' 离太近了，不好意思抓') // 并没有捕获上面的异常
          }
      )
  // catch处理错误
  ajax('./api/foo.json')
      .then(
          function err (res) {
              console.log(res)
              // 返回一个错误的promise
              return ajax('./api/abel.json')
          }
      )
      // 本质就是紧跟着的then中的promise的回调
      .catch(
          function (error) {
              console.log(error + ' 小样，哪里跑') // 结果输出：Error: Not Found 小样，哪里跑
          }
      )
  
  /* 
      全局对象错误统一处理
  */
  // Web中
  window.addEventListener('unhandledrejection', event => {
      const { reason, promise } = event
      console.log(reason, promise)
      // reason => Promise
      // promise => 出现异常的Promise对象
      event.preventDefault()
  }, false)
  // node中
  process.on('unhandledRejection', (reason, promise) => {
      console.log(reason, promise)
      // reason => Promise
      // promise => 出现异常的Promise对象
  })
  ```

## 3.5·Promise静态方法

> Promise相关的方法

- Promise.resolve()

  - 将任意参数变为promise
  - 根据传入类型的不同，有不同的效果与意义
    - 传入字符串等类型的，属于作为参数，传给了自己的回调函数
    - 传入一个promise,等于promise本身
    - 传入一个拥有then方法的对象，第三方promise转原生promise的解决方案

- Promise.reject()

  - 快速创建一个承诺未达成的原因

- 格式示例

  ```js
  /* 
      Promise静态方法  
  */
  
  // -----------------------------------------------------
  /* 
      Promise.resolve()
          将任意的参数变为promise
  */
  // 传入字符串等类型的，属于作为参数，传给了自己的回调函数
  const foo = Promise.resolve('foo')
  foo
      .then(
          function (value) {
              console.log(value) // 结果输出：foo
          }
      )
  // 传入一个promise,等于promise本身
  const foo1 = Promise.resolve(foo)
  foo1
      .then(
          function (value) {
              console.log(value) // 结果输出：foo
          }
      )
  // 传入一个拥有then方法的对象，第三方promise转原生promise的解决方案
  Promise.resolve({
      then: function (onFulfilled, onRejected) {
          onFulfilled('foo')
      }
  })
      .then(function (value) {
          console.log(value) // 结果输出：foo
      })
  
  // ---------------------------------------------------------
  /* 
      Promise.reject()
          快速创建一个失败的原因
  */
  Promise.reject('这就是我失败理由')
      .catch(function (error) {
          console.log(error) // 结果输出：这就是我失败理由
      })
  ```

## 3.6·Promise并行执行

> 齐头并进的Promise

- Promise.all()
  - 我全都要
- Promise.race()
  - 只要一个就好

- 格式示例

  ```js
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
  ```

## 3.7·Promise执行时序

> 宏任务 & 微任务

- 宏任务

  - 跟在宏任务后面，如果有格外的需求，可以跟着一起办理，无需重新排队，提高整体的响应能力
  - Promise & MutationObserver & process.nextTick(node环境中)

- 微任务

  - 目前绝大多数异步调用都是作为宏任务执行，需要重新排队

- 格式示例

  ```js
  /* 
      Promise执行时序
          宏任务&微任务
  */
  
  /* 
      微任务: 跟在宏任务后面，如果有格外的需求，可以跟着一起办理，无需重新排队，提高整体的响应能力
          Promise & MutationObserver & process.nextTick(node环境中)
      宏任务：目前绝大多数异步调用都是作为宏任务执行，需要重新排队
  */
  console.log('开始执行同步任务')
  
  setTimeout(() => {
      console.log('这是一个定时器异步任务')
  }, 0)
  
  Promise.resolve()
      .then(() => {
          console.log('promise中的第一个回调')
      })
      .then(() => {
          console.log('promise中的第二个回调')
      })
      .then(() => {
          console.log('promise中的第三个回调')
      })
  
  console.log('同步任务结束')
  
  /* 输出结果顺序
          开始执行同步任务
          同步任务结束
          promise中的第一个回调
          promise中的第二个回调
          promise中的第三个回调
          这是一个定时器异步任务
      疑问点：
          1.为什么promise比定时器任务更先执行
              由于promise本身可以作为微任务，因此，它拥有比定时器更优先的时序排列。
          2.为什么promise的回调的回调都跟着提前了
              答：回调队列中的任务称之为宏任务，而宏任务执行过程中临时加上的额外需求成为微任务，可以直接跟着执行，无需排队，当然也可以选择作为一个新的宏任务进入到队列中排队
              追问：什么异步任务能重新选择作为宏任务，什么能作为微任务跟着执行
              答：定时器任务会做回宏任务从新排队，而promise的回调会作为微任务跟着执行
  */
  ```

## 3.8·Promise常见误区

> Promise的本质也是通过回调函数，来定义异步任务结束之后所需要执行的任务

注意点：
- Promise回调方法，通过 `then` 来传递
- Promise分为成功与失败的回调
- Promise无需嵌套使用,通过链式调用，来保持异步的扁平化
- 宏任务与微任务对于执行顺序的影响

# 4·Generator异步方案

> 进一步提升异步任务的代码可读性

## 4.1·Generator 异步解决方案回顾

> ES2015Generator的回顾与补充

- 在普通函数的函数名前面加`*` ,可以把普通函数变为生成器函数

- 生成器函数的函数体，通过next()调用后才能执行

- `yield`关键词，打断点

- `throw()`用于返回错误,可以被函数体中的try...catch捕获到

- 格式示例

  ```js
  /* 
      Generator 异步解决方案回顾
  */
  
  function * foo () {
      console.log('start')
  
      try {
          const res = yield 'foo'
          console.log(res)
      } catch (e) {
          console.log(e)
      }
  }
  
  const generator = foo()
  
  console.log(generator.next()) // 在生成器函数中，遇到yield会在执行完这一个yield之后暂停 // 输出结果：{value: "foo", done: false}
  
  console.log(generator.throw(new Error('抛出了一个错误'))) // throw同样可以继续执行，不过打印出来的会是错误信息 // 输出结果：Error: 抛出了一个错误
  ```

## 4.2·体验Generator异步方案

> 使用Generator的特性来体验更优的异步解决方案

- 逻辑分析

  > Generator用于异步方案，得益于它的关键词yield后面的返回值，value，将作为参数传递下去，这符合了promise链式的需求，每一次通过调用next()才能继续往下进行，这给了用于反馈每次异步请求的回调函数以执行的控件，通过在生成器中指定try...catch，在执行时调用throw()方法也可以捕获异常，再通过自调用迭代，就可以完成异步请求的进一步扁平化，如同步函数一样。

- 格式示例

  ```js
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
  ```

# 5·Async语法糖

> 终极的异步解决方案。
>
> 语言层面的异步编程标准

- 语法类似于generator

  - 关键词从`*&yield`变成了`async & await`

  - 目前`await`无法单独使用，只能在async定义的函数中使用

- 使用Async修饰的函数，返回的也是一个promise

- 不再需要配合执行器，直接调用修饰的函数，就是执行的全部过程

- 格式示例

  ```js
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
  ```



​	generator.throw() 用于抛出异常