"use strict";
/*
    TypeScript原始类型
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
    如何让ts报错显示中文
*/
// 运行指令：`yarn tsc --locale zh-CN`
// ------------------------------------------------------
/*
    基本类型，非严格模式默认允许为空
*/
var a = '我是一个字符串';
var b = 123456; // NaN // Infinity
var c = true;
// const d: boolean = null // 严格模式下不能null
var e = undefined; // void只能为undefined不能是null
var f = null;
var g = undefined;
var h = Symbol();
// ----------------------------------------------------------
/*
    Object类型的限制
*/
var foo1 = function () { }; // 限制函数类型
var obj1 = { foo: 123, bar: 'string' }; // 限制对象属性个数，属性的名字以及属性值的类型、
// ------------------------------------------------------
/*
    Array类型的限制
*/
var arr1 = [1, 2, 3]; // 限制数组类型，且限制数组中的成员类型必须为数字
var arr2 = [1, 2, 3];
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0); // 计算累加和
}
// ----------------------------------------------------
/*
    元组类型
        数据结构
        明确元素数量，以及各个元素类型
*/
var tuple = [18, 'abel'];
// 妙用：
Object.entries({
    foo: 123,
    bar: 456
});
var post = {
    title: 'hello typescript',
    content: 'typescript is a typed superset of javascript',
    status: 0 /* Draft */ // 限制值只能为枚举类型中的值
};
// ---------------------------------------------
/*
    函数的类型约束
*/
function foo2(a, b, c) {
    if (b === void 0) { b = 10; }
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    // 设置参数类型，参数默认值，可选参数，剩余参数，以及返回值类型
    return '这里只能返回字符串了';
}
foo2(100, 12, 15, 56, 56);
// 函数表达式,定义回调函数类型
var foo3 = function (a, b) {
    return '这里只能返回字符串了';
};
// ------------------------------------------------
/*
    Any
        任意类型的参数，弱类型，动态类型
        存在类型安全问题
*/
function stringify(value) {
    return JSON.stringify(value);
}
// 用于类型转换的时候，难免需要使用到any
stringify('string');
// -------------------------------------------------------
/*
    隐式类型推断
        建议为每一个变量添加明确的类型
*/
var age = 18;
// age = 'eight' // 隐式推断age为number，因此无法再次赋值为字符串
var any1; // 当隐式类型无法推断一个类型的时候，会将之类型判断为any
any1 = 123;
any1 = '123';
// --------------------------------------------------
/*
    类型断言
        关键词: as、
        不等于类型转换
*/
var nums = [1, 2, 3, 4];
var res = nums.find(function (i) { return i > 0; }); // res类型不明确，无法直接进行数学运算
var square = res * res; // 类型断言，确定的说明不确定的类型为某个类型，以便其进行下一步的操作
var num1 = res; // 不推荐使用，因为在jsx中，会和标签产生冲突
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
var cache = {};
cache.name = 'abel';
cache.age = 12;
printPost({
    title: 'hello typescript',
    summary: 'aa',
    content: 'A javascript superset'
});
//# sourceMappingURL=04.js.map