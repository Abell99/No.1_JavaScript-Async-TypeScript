/* 
    Symbol 一种全新的原始数据类型
*/

/* 
    symbol翻译过来就是 符号，它表示一个独一无二的值
    目前存在的数据类型：
        基本类型：String、Number、Boolean、Symbol、Undefined、Null (正在标准化的类型：BigInt)
        引用类型：Object(object,array,function)
*/

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
    复用
*/
const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2) // 输出结果: true

/* 
    Object.getOwnPropertySymbols(对象名) 获取对象中的symbol
*/
console.log(Object.getOwnPropertySymbols(obj)) // 输出结果: [ Symbol(name), Symbol(sex) ]


// 主要用途: 为对象添加一个独一无二的属性名
console.log(Symbol() === Symbol()) // 输出结果: false

const a = Symbol()
const o = {
    a: 'abc',
    say () {
        console.log(this.a)
    }
}
o.say()