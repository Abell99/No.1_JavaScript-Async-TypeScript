/* 
    TypeScript 泛型与类型声明
*/

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

/* 
    类型声明 
        关键词:  declare 
        说明：主要用于兼容老的npm模块，目前大部分常用的npm包都有自己的类型声明模块，可以根据提示下载
*/

// 有类型声明模块的话下载引入类型声明模块包即可