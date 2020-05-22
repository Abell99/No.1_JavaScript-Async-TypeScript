# 课程概括

> TypeScript解决的痛点：
>
> ​	解决了JavaScript类型系统的问题

- 内容概括
  - 强类型与弱类型
  - 静态类型与动态类型
  - JavaScript自有类型系统的问题
  - Flow静态类型检查方案
  - TypeScriptt语言规范与基本应用

# 1·类型的问题

> 编程语言按类型区分：
>
> ​	强类型与弱类型（类型安全）
>
> ​	静态类型与动态类型（类型检查）

## 1.1·强类型与弱类型

> 从类型安全角度来区分：
>
> ​	强类型与弱类型
>
> 对于类型的限制的强弱问题
>
> 由于这种强弱类型之分根本不是某个权威机构的定义，因此强弱类型的界定方式，基本集中于类型约束问题

- 强类型 

  - 在语言层面限制函数的实参类型必须与形参类型相同
  - 强类型语言中不允许任意的隐式类型转换
  - 优势
    - 错误更早暴漏，在编码阶段即可体现
    - 代码更加智能，编码更加准确
    - 重构更牢靠
    - 减少不必要的类型判断

- 弱类型

  - 弱类型在语言层面不会限制实参的类型

  - 弱类型语言则允许任意的数据隐式类型转换

  - 实际产生的问题

    - 异常只有在运行后才会体现
    - 类型不明确，函数功能就不确定
    - 对象索引器的错误用法

    - 格式示例

      ```js
      /* 
          弱类型的问题
      */
      
      const obj = {}
      obj.foo()
      setTimeout(() => {
         obj.foo() 
      }, 1000)
      
      // ------------------------------
      
      function sum (a, b) {
          return a + b
      }
      console.log(sum(100, 100))
      console.log(sum(100, '100'))
      
      // -----------------------------------
      
      const obj = {}
      obj[true] = 100
      console.log(obj['true'])
      ```

> 由于弱类型照成的问题虽然可以通过约定来解决，但是
>
> ​	君子约定有隐患，强制要求有保障

## 1.2·静态类型与动态类型

> 从类型检查角度来区分
>
> ​	静态类型与动态类型 

- 静态类型
  - 一个变量在声明时就明确了类型，且不允许再次修改

- 动态类型
  - 在运行阶段才能明确一个数据的类型，且变量的类型可以随时改变
  - 动态类型的语言中，变量没有类型，而变量中存放的值是有类型的

## 1.3·JavaScript类型系统特征-

> 弱类型 且 动态类型

- 优点：
  - 高自由度，高灵活度
- 缺点
  - 缺失了类型系统的可靠性

> 为什么JavaScript不是一门强类型，静态类型的语言:
>
> - 早期设计的应用场景简单
> - 脚本语言，没有编译环节，无法进行类型检查

# 2·Flow

> JavaScript的类型检查器
>
> 使用参考：[简书文字，flow的使用](https://www.jianshu.com/p/7716dc8b2206)

- 安装：`yarn add flow-bin --dev`

## 2.1·格式示例

> 演示

```js
// @flow
/* 
    flow的体验
*/

/* 通过注释开启flow校验：
    0.安装：yarn add flow-bin --dev
    1.在js开头声明`@flow`,通过`: number`添加类型注释
    2.关闭编辑器自带的校验 javascriprt validate:false
    3.初始化flow配置文件：yarn flow init
    4.运行flow：yarn flow
    5.停止flow：yarn flow stop
    6.清除注释，@balel/preset-flow 或者 yarn add flow-remove-types => yarn flow-remove-types . -d dist
*/

/* 
    安装插件，保存即可找到错误：flow language support
*/


/* 功能 */
// -------------------------------
// -----------------------------------------------
/* 
    类型推断
        自动推断变量或者参数的类型
*/
function square(n) {
    return n * n 
}
square(100)

// ----------------------------------------------------
/* 
    flow支持的原始类型
        string number boolean null undefined symbol
*/
const a: string = 'abel'
const b: number = 123456 // NaN // Infinity
const c: boolean = false // trun
const d: null = null
const e: void = undefined
const g: symbol = Symbol()
// ----------------------------------------------
/* 
    数组类型限制
        Array
*/

const arr1: Array<number> = [1, 2, 3] // 限制数组，并且限制数组成员类型
const arr2: number[] = [1, 2, 3]

// 元组，定制数组组成,定制只能有几个成员组成，并声明每一个成员的类型
const arr3: [string, number] = ['foo', 100]
// --------------------------------------------
/* 
    对象类型限制
        Object
*/

const obj1: { foo: string, bar: number } = { foo: 'string', bar: 100 } // 限制对象属性个数，并且限制对象的成员名称以及类型
const obj2: { foo?: string, bar: number } = { bar: 100 } // ?修饰的属性名表示可以有可以没有
const obj3: { [string]: string } = {} // 不限制属性的个数，但是限制属性的类型以及属性值的类型
obj3.key1 = 'value1'
obj3.key2 = 'value2'
// --------------------------------------------
/* 
    函数类型限制
*/ 

function foo1 (a: number, b: number) { // 用于形参
    return a + b
}
foo1(100, 100) // 实参只能是形参声明的类型

function foo2 ():number {
    return 100 // 用于函数，函数的返回值只能是声明的类型
}

function foo3 (callback: (string, number) => void) { // 用于回调函数以及回调函数的返回值
    callback('string', 100)
}
foo3(function (str, n) {
})
// -------------------------------------------
/* 
    特殊类型
        字面量 自定义类型限制   `|`的使用
*/
const str1: 'foo' = 'foo' // 限制字符串只能为固定内容   
const type: 'success' | 'waring' | 'danger' = 'success'

type StringOrNumber = string | number // 自定义个限制类型

const str2: StringOrNumber = 'string'

const gender: ?number = null // ?设置可以为控或者undefind === const gender: number | null | void
// ------------------------------------------
/* 
    Mixed 与 Any
        mixed === any === 任意类型
        mixed 强类型 更为安全，只有通过判断才能对参数进一步的处理
        any 弱类型 不推荐使用，主要用来兼容以前的老代码
*/

// 对比：

// mixed 
function passMixed (value: mixed) {
    if(typeof value === 'string')
    value.substr(1)
    if(typeof value === 'number')
    console.log(value * value)
}
// passMixed('string')
passMixed(100)
function passAny (value: any) {
    // value.substr(1)
    console.log(value * value)
}
// passAny('string')
passAny(100)

// ----------------------------------------------
/* 
    运行环境 API 对于运行环境的限制
*/

const element: HTMLElement | null = document.getElementById('app')


// ------------------------------------------------
/* 
    flow类型的总结
*/
/* 
    学习的目的，主要用于在今后学习框架源码的时候，能够明白使用了flow的部分的意义
*/
```

# 3·TypeScript

> JavaScript的超集(superset)，渐进式的提升
>
> TypeScript---前端领域的第二语言

![TypeScript](https://pics.images.ac.cn/image/5ec6aa935f786.html)

- 任何环境下的JavaScript都支持
- 比起flow，功能更为强大，生态更加健全，更完善

## 3.1·TypeScript的初始

> TypeScipt的安装与配置

- 安装：`yarn add typescript --dev `
- 转换单个文件：
  - 全部转换为使用es3的标准，完全兼容之前的老代码
  - 运行：`yarn tsc ts文件名`

- 转换整个项目或工程

  - 初始化配置文件：`yarn tsc --init`

  - 根据需求更改tsc配置文件
  - 运行：`yarn tsc`
    - 中文报错：`yarn tsc --locale zh-CN`
    - vscode报错的中文设置setting=>typescript local=ch-cn

## 3.2·基本数据类型

> 基本类型，在ts配置文件中，只有设置非严格模式，才能默认允许为空

- 基本类型包括：

  - string
  - number
  - boolean
  - void
  - null
  - underfined
  - symbol
  - any
    - 弱类型，动态类型，存在安全问题

- 格式示例

  ```js
  /* 
      如何让ts报错显示中文
  */
  
  // 运行指令：`yarn tsc --locale zh-CN`
  // ------------------------------------------------------
  const a: string = '我是一个字符串'
  const b: number = 123456 // NaN // Infinity
  const c: boolean = true
  // const d: boolean = null // 严格模式下不能null
  const e: void = undefined // void只能为undefined不能是null
  const f: null = null
  const g: undefined = undefined
  const h: symbol = Symbol()
  ```

## 3.3·引用数据类型

> 对于引用型数据类型的约束

- Array

  - 限制变量为数组

    - 关键词：Array || []

    - 限制数组成员：<number> || number

      > 以number为例

  - 格式示例

    ```js
    /* 
        Array类型的限制
    */
    const arr1: Array<number> = [1, 2, 3] // 限制数组类型，且限制数组中的成员类型必须为数字
    const arr2: number[] = [1, 2, 3]
    function sum (...args: number[]) { // 限制传进来的参数必须都是数字
        return args.reduce((prev, current) => prev + current, 0) // 计算累加和
    }
    ```

- Object

  - 限制变量为对象
    
  - 关键词：Object || {}
    
  - 格式示例

    ```js
    /* 
        Object类型的限制
    */
    const foo1: object = function () {} // 限制函数类型
    const obj1: { foo: number, bar: string} = { foo: 123, bar: 'string' } // 限制对象属性个数，属性的名字以及属性值的类型、
    ```

- function

  > 对于参数以及返回值的约束

  - 限制参数类型
  - 限制返回值类型

  - 格式示例

    ```js
    /* 
        函数的类型约束 
    */
    function foo2 (a: number, b: number = 10, c?: number, ...rest: number[]): string  {
        // 设置参数类型，参数默认值，可选参数，剩余参数，以及返回值类型
        return '这里只能返回字符串了'
    }
    foo2(100, 12, 15, 56, 56)
    // 函数表达式,定义回调函数类型
    const foo3: (a: number, b: number) => string = function (a: number, b: number):string
    {
        return '这里只能返回字符串了'
    }
    ```

## 3.4·类型系统新增数据结构

> 数组对应的元组，限定值内容的枚举，参数的接口

- 元组

  - 说明：用来明确元素数量，以及各个元素的类型

  - 格式示例

    ```js
    /* 
        元组类型
            数据结构
            明确元素数量，以及各个元素类型
    */
    
    const tuple: [number, string] = [18, 'abel']
    // 妙用：
    Object.entries({ // 通过entries获取对象的属性以键值对的模式，输出的结果就是一个元组，因为限制了成员数量
        foo: 123,
        bar: 456
    })
    ```

- 枚举

  - 说明：用来限定内容选择，并声明选项的意义

  - 关键词：enum

  - 格式示例

    ```js
    /* 
        枚举类型
            数据结构
            限制选项，并声明选项的意义
            关键词: enum
            
    */
    // 不加const编译后，成为一个双向的键值对对象，加const之后，会出现代码入侵的效果，引用枚举的地方，会直接替换成枚举的值
    const enum PostStatus { // 特有的枚举类型，与对象的不同是，键值对：换成了等号
        Draft = 0,
        Unpublished = 1,
        Published = 2
    }
    const post = {
        title: 'hello typescript',
        content: 'typescript is a typed superset of javascript',
        status: PostStatus.Draft // 限制值只能为枚举类型中的值
    }
    ```

- Interfaces接口

  - 说明：用来单独定义函数中，参数的内容

  - 关键词：Interfaces

  - 格式示例

    ```js
    /* 
        Interfaces接口
    */
    interface Post { // 定义接口
        title: string // 定义接口成员类型
        readonly summary: string // 只读成员
        content: string
        subtitle?: string // 可选成员 // string | undefined
    }
    interface Cache {
        [key: string]: string | number// 动态接口成员
    }
    function printPost (post: Post) { // 将参数类型指定为接口名称
        console.log(post.title)
        console.log(post.content)
    }
    const cache: Cache = {}
    cache.name = 'abel'
    cache.age = 12
    printPost({ // 必须符合接口要求，实参才能正确传递
        title: 'hello typescript',
        summary: 'aa',
        content: 'A javascript superset'
    })
    ```

## 3.5·类型的推断与断言

> 隐式类型推断与不明确类型的断言

- 推断

  - 说明：ts会自动为每一个未明确的类型，根据上下文的使用与赋值设立默认的类型

  - 格式示例

    ```js
    /* 
        隐式类型推断
            建议为每一个变量添加明确的类型
    */
    let age = 18
    // age = 'eight' // 隐式推断age为number，因此无法再次赋值为字符串
    let any1 // 当隐式类型无法推断一个类型的时候，会将之类型判断为any
    any1 = 123
    any1 = '123'
    ```

- 断言

  - 说明：系统无法自动判断的类型，需要断言是那种类型才可以进行下一步的使用
  - 注意：断言不等于类型转换
  - 关键词：as

  - 格式示例

    ```js
    /* 
        类型断言
            关键词: as、
            不等于类型转换
    */
    const nums = [1, 2, 3, 4]
    const res = nums.find(i => i > 0) // res类型不明确，无法直接进行数学运算
    const square = (res as number) * (res as number) // 类型断言，确定的说明不确定的类型为某个类型，以便其进行下一步的操作
    const num1 = <number>res // 不推荐使用，因为在jsx中，会和标签产生冲突
    ```

## 3.6·类的修饰符

> class：
>
> ​	用于描述一类事物的抽象特征
>
> ​	是ts对class的增强
>
> ​	访问修饰符&抽象类

- 访问修饰符
  - 说明: ts中新增的三种访问修饰符，用来控制属性的可访问限制级别
    - public: 公有属性，字类可以继承并通过实例化对象属性访问
    - protected: 保护属性，字类可以继承，但是无法通过实例化对象属性来访问
    - private: 只能在class内部使用，无法继承，也无法通过实例化对象属性访问
- 另外在修饰符后面还可以添加只读，限制属性不可更改
  
- readonly: 只读属性
  
- 格式示例

  ```tsx
  /* 
      类的定义：
          描述一类事物的抽象特征
      ts对于class的增强
          访问修饰符
          抽象类的概念
  */
  // ------------------------------------------------------
  /* 
      三个访问修饰符，用来控制属性的可访问限制级别
          public: 公有属性，字类可以继承并通过实例化对象属性访问
          protected: 保护属性，字类可以继承，但是无法通过实例化对象属性来访问
          private: 只能在class内部使用，无法继承，也无法通过实例化对象属性访问
  
          readonly: 只读属性
  */
  class Person {
      // 类是属性必须拥有值，要不再这里赋值初始值，要不在构造函数中，赋值
      name: string = 'init name'
      private age: number // 定义私有属性
      public className: string = '1班' // 公有属性
      protected gender: boolean // 添加保护属性 
      public readonly grade: number = 2016 // 只读属性
  
  
      constructor (name: string, age: number) { // 限定属性值的类型
          this.name = name
          this.age = age
          this.gender = true
      }
  
      sayHi (msg: string): void { // 限定参数以及返回类型
          console.log(`i am ${this.name},${this.age}`)
          console.log(msg)
          console.log(this.gender)
      }
  }
  
  class Student extends Person {
      // es6固有的私有修饰符,外部无法访问构造函数，只能通过class的公开方法来实例化
      private constructor (name: string, age: number) {
          super(name, age)
          console.log(this.gender) // 私有属性字类无法继承，但是受保护的属性可以被字类继承
      }
      // 通过static公开的构造函数方法 来实例化对象
      static create (name: string, age: number) {
          return new Student(name, age)
      }
  }
  
  const abel = new Person('abel', 18)
  
  console.log(abel.className) // 公有属性可以在实例化对象中直接访问
  // console.log(abel.gender, abel.age) // 私有属性和受保护的属性都无法访问
  
  const jack = Student.create('jack', 18)
  ```

## 3.7·类的接口与抽象类

> 类的接口与抽象类，功能相近，但不尽相同，都用来约束引用它们的对象

- 类的接口

  - 关键词：interface
  - 说明：约束多个类中，必须拥有某种方法，接口中不声明方法体，只声明方法名与类型

  - 格式示例

    ```tsx
    /* 
        接口：
            关键词：interface
        什么使用需要接口？
            两个类中，拥有相同的方法，但是方法的实现过程不一样，可以用来约束必须有此方法
            推荐一个接口，只去约束一个方法，不需要方法体
    */
    
    interface Eat {
        eat (food: string): void // 在接口中限制行为的参数类型，返回值类型
    }
    interface Run {
        run (distance: number): void // 推荐一个接口只限制一个行为
    }
    
    class Person implements Eat, Run { // 接口关键词后面可以接多个接口，可以用逗号隔开即可
        eat (food: string): void {
            console.log(`优雅的吃${food}`)
        }
        run (distance: number): void {
            console.log(`直立行走${distance}`)
        }
    }
    class Animal implements Eat, Run {
        eat (food: string): void {
            console.log(`呼噜呼噜的吃${food}`)
        }
        run (distance: number): void {
            console.log(`爬行${distance}`)
        }
    }
    ```

- 抽象类

  ```js
  我们都是人，人就是一个抽象的概念，人也属于动物，动物相对于人来说，又是一个抽象类
  ```

  - 关键词：abstract

  - 说明：用来概括类的父级，更高级的分类，可以设置有方法体的方法，也可以只设置方法名与参数类型，返回值类型

  - 格式示例

    ```js
    /* 
        抽象类：
            关键词：abstract
        什么时候需要使用抽象类:
            用来抽象类的属性与方法 ,一个类比较抽象的时候，就可以使用抽象类来概括
            作为抽象类的的类，只能被继承，不能作为子类，方法体不是必要的
    */
    
    abstract class Animal_new {
        eat (food: string): void {
            console.log(`呼噜噜的吃：${food}`)
        }
    
        abstract run (distance: number): void // 抽象类中，如果定义的方法不具备方法体，应该使用抽象类关键词来修饰
    }
    class Dog extends Animal_new {
        run(distance: number): void {
            console.log('四脚爬行', distance)
        }
    }
    const chinese_rural_dog = new Dog()
    chinese_rural_dog.eat('骨头')
    chinese_rural_dog.run(100)
    ```

## 3.8·泛型

> 将声明的函数定义为一个常量，用的时候再去填写常量值，提升复用率

- 关键词：<>
- 说明：提高方法的复用率
  
- 实现逻辑:将函数的类型定义成为一个参数，当使用的时候，再去给参数赋值
  
- 格式示例

  ```tsx
  /* 
      泛型
          关键词：<>
          提高方法的复用率
              实现逻辑:将函数声明的类型定义成为一个参数，当使用的时候，再去给参数赋值
  */
  function createArray<T> (length: number, value: T): T[] { // 通过泛型指定数据类型，提高代码的复用率
      const arr = Array<T>(length).fill(value)
      return arr
  }
  
  const res = createArray<string>(3, 'foo')
  ```

## 3.9·类型声明处理第三方包

> 有些第三方包未经ts类型处理，需要处理，以便能够正常使用

- 关键词：declare

- 说明：主要用于兼容老的npm模块，目前大部分常用的npm包都有自己的类型声明模块，可以根据提示下载

- 格式示例

  ```tsx
  /* 
      类型声明 
          关键词:  declare 
          说明：主要用于兼容老的npm模块，目前大部分常用的npm包都有自己的类型声明模块，可以根据提示下载
  */
  
  // 有类型声明模块的话下载引入类型声明模块包即可
  ```

  

