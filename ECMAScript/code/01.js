/* 
    let,const与作用域
*/

// 作用域的感受
if(1) {
    // lat a = 0
    var a = 0
}
// console.log(a)

// 使用var则无法正常的使用同一个变量名来进行循环
for(let i=0; i<3; i++) {
    for(let i=0; i< 3; i++) {
        console.log(i)
    }
    // console.log('内层循环结束' + i)
}

// 定义常量
const max = 5;
// 无法再次赋值
// max = 12