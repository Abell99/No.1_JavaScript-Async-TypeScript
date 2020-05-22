/* 
    字符串的扩展方法
*/

// 定义字符串
const message = 'Error: foo is not defind.'

// ------------------------------------------
// - includes() 
// 判断是否包含
console.log(message.includes('foo'))

// ------------------------------------------
// - startsWith()
// 判断是否以指定字段开头
console.log(message.startsWith('Error'))

// ------------------------------------------
// - endsWith()
// 判断是否以指定字段结尾
console.log(message.endsWith('.'))

