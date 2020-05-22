"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    typescript的作用域问题
*/
// ----------------------------------------
/*
    默认的typescript的检测作用域是全局的，因此不同文件的变量都不能重复
*/
var a = 4569; // 报错，a不能重新声明
// 解决方法
// 1.利用自调用函数创建一个局部作用域
(function () {
    // const a: number = 123
})();
//# sourceMappingURL=05.js.map