/* 
    TypeScript原始类型
*/
   
/* 
    如何让ts报错显示中文
*/

// 运行指令：`yarn tsc --locale zh-CN`
// ------------------------------------------------------
/* 
    基本类型，非严格模式默认允许为空
*/
const a: string = '我是一个字符串'
const b: number = 123456 // NaN // Infinity
const c: boolean = true
// const d: boolean = null // 严格模式下不能null
const e: void = undefined // void只能为undefined不能是null
const f: null = null
const g: undefined = undefined
const h: symbol = Symbol()
// ----------------------------------------------------------
/* 
    Object类型的限制
*/
const foo1: object = function () {} // 限制函数类型
const obj1: { foo: number, bar: string} = { foo: 123, bar: 'string' } // 限制对象属性个数，属性的名字以及属性值的类型、
// ------------------------------------------------------
/* 
    Array类型的限制
*/
const arr1: Array<number> = [1, 2, 3] // 限制数组类型，且限制数组中的成员类型必须为数字
const arr2: number[] = [1, 2, 3]
function sum (...args: number[]) { // 限制传进来的参数必须都是数字
    return args.reduce((prev, current) => prev + current, 0) // 计算累加和
}
// ----------------------------------------------------
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

// ---------------------------------------------------------
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
// ---------------------------------------------
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

// ------------------------------------------------
/* 
    Any
        任意类型的参数，弱类型，动态类型 
        存在类型安全问题
*/
function stringify (value: any) {
    return JSON.stringify(value)
}
// 用于类型转换的时候，难免需要使用到any
stringify('string')

// -------------------------------------------------------
/* 
    隐式类型推断
        建议为每一个变量添加明确的类型
*/
let age = 18
// age = 'eight' // 隐式推断age为number，因此无法再次赋值为字符串
let any1 // 当隐式类型无法推断一个类型的时候，会将之类型判断为any
any1 = 123
any1 = '123'

// --------------------------------------------------
/* 
    类型断言
        关键词: as、
        不等于类型转换
*/
const nums = [1, 2, 3, 4]
const res = nums.find(i => i > 0) // res类型不明确，无法直接进行数学运算
const square = (res as number) * (res as number) // 类型断言，确定的说明不确定的类型为某个类型，以便其进行下一步的操作
const num1 = <number>res // 不推荐使用，因为在jsx中，会和标签产生冲突

// -----------------------------------------------
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


// -------------------------------------------------------
// 防止定义冲突
export {}