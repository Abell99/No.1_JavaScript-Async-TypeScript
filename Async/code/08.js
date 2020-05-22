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