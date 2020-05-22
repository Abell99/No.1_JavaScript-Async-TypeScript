/* 
    Reflect 统一的对象操作API
*/

// --------------------------------------------
// Reflect属于一个静态类,不能通过new的方式去构建一个实例对象

// Reflect内部封装了一些列对对象的底层操作的方法

// Reflect成员方法就是Proxy处理对象的默认实现

// -------------------------------------------
// 十三个方法的初体验
// -------------------------------------------------
// 对象声明
let obj = {
    name: 'abel',
    sex: '男',
    age: 23,
    job: 'coder',
    say () {
        console.log('hello world')
    },
    // 定义一个getter访问器
    get did() { return `Abel 喜欢 ${this._did}`; },
    // 定义一个setter访问器
    set Old(val) { old = val + this.age; },
    get Old() { return old}
}

// ------------------------------------------
/* Reflect.apply() 
说明: 通过指定的参数列表发起对目标(target)函数的调用,改变this指向调用函数
语法: Reflect.apply(target, thisArgument, argumentsList)
参数说明:  
    target
         目标函数。
    thisArgument
         target函数调用时绑定的this对象。
    argumentsList
         target函数调用时传入的实参列表，该参数应该是一个类数组的对象。*/

function func(myname) { // 唯一的形参是apply方法的第三个参数
    console.log('关键词`apply`: 改变了this执行,还可以传参,' + myname + "的性别是" + this.sex); // 通过apply改变了this的指向,将this指向了第二个参数obj
}
Reflect.apply(func, obj,["Abel"]) // 返回的结果为: Abel的性别是男

// ----------------------------------------------

/* Reflect.construct()
说明: 该方法的作用和 new Date() 创建一个实列方法作用类似，那么使用该方法，我们就可以提供一种不使用new来调用构造函数的方法
语法: Reflect.construct(target, argumentsList[, newTarget])
参数说明: 
    target
         被运行的目标构造函数
    argumentsList
         类数组，目标构造函数调用时的参数。
    newTarget 可选
         新创建对象的原型对象， 参考 new.target 操作符，默认值为target。 */
var date = Reflect.construct(Date, [2020, 5, 15]); // 当只有两个参数的时候,第三个参数,新创建参数的原型对象就是目标对象,目标函数(因此最好第一个参数就是构造函数就好了嘛)
console.log('关键词`construct`: 实例化了一个Date对象,它可以调用构造函数Date的方法,今年是: ' + date.getFullYear()); // 实例化出来的对象,可以调用构造函数的方法

// ----------------------------------------------
/* Reflect.defineProperty()
说明: 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回一个布尔值
语法: Reflect.defineProperty(target, propertyKey, attributes)
参数说明:
    target
        目标对象。
    propertyKey
        要定义或修改的属性的名称。
    attributes
        要定义或修改的属性的描述。 */
const result_define = Reflect.defineProperty(obj, 'sex', {value: '女'}) // 第二个参数,属性名应为字符串格式,第三个参数,对象中的value,为对应的修改值
console.log('关键词`defineProperty`: 修改obj的sex为女,结果为: ' + result_define)

// -----------------------------------------------
/* Reflect.deleteProperty()
说明: 用于删除属性,并返回一个布尔值
语法: Reflect.deleteProperty(target, propertyKey)
参数说明: 
    target
         删除属性的目标对象。
    propertyKey
         需要删除的属性的名称。 */
const result_delect = Reflect.deleteProperty(obj, 'job')
console.log('关键词`delectProperty`: 删除了obj的job属性,结果为: ' + result_delect)

// ----------------------------------------------
/* Reflect.get()
说明: 读取属性,并返回属性值
语法: Reflect.get(target, propertyKey[, receiver])did
参数说明:
    target
         需要取值的目标对象
    propertyKey
         需要获取的值的键值
    receiver
         如果target对象中指定了getter，receiver则为getter调用时的this值。 */
const result_get = Reflect.get(obj, 'did', { _did: '打豆豆' }) // 如果第二个参数指向是一个getter访问器，此访问器的this是指向第三个参数的
console.log('关键词`get`: 获取了abel的喜好,是通过第三个参数传进去的: ' + result_get)

// -----------------------------------------------
/* Reflect.getOwnPropertyDescriptor()
说明: 获取属性的详细描述,返回属性的描述符
语法: Reflect.getOwnPropertyDescriptor(target, propertyKey)
参数说明:
    target
        需要寻找属性的目标对象。
    propertyKey
        获取自己的属性描述符的属性的名称。 */
const result_getDescriptor = Reflect.getOwnPropertyDescriptor(obj, 'name')
console.log('关键词`getOwnPropertyDescriptor`: 可以准确的获取一个属性的描述符: ' + result_getDescriptor)
// console.log(result_getDescriptor)

// ---------------------------------------------
/* Reflect.getPrototypeOf()
说明: 返回指定对象的原型 (即内部的 [[Prototype]] 属性的值)
语法: Reflect.getPrototypeOf(target)
参数说明:
    target
        获取原型的目标对象。 */
const result_getPrototy = Reflect.getPrototypeOf(obj)
console.log('关键词`getPrototypeOf`: 可以获取示例对象的原型,例如实例对象obj的原型为: ' + result_getPrototy)
// console.log(result_getPrototy)

// ---------------------------------------------
/* Reflect.has()
说明: 用于检查一个对象是否拥有某个属性,返回一个布尔值
语法: Reflect.has(target, propertyKey)
参数说明:
    target
        目标对象.
    propertyKey
        属性名，需要检查目标对象是否存在此属性。 */
const result_has = Reflect.has(obj, 'name')
console.log('关键词`has`: 可以查目标对象是否存在此属性,例如实例对象obj中有name属性: ' + result_has)

// -------------------------------------------
/* Reflect.isExtensible()
说明: 判断一个对象是否可扩展 （即是否能够添加新的属性）
语法: Reflect.isExtensible(target)
参数说明:
    target
        检查是否可扩展的目标对象。 */
const result_Extensible = Reflect.isExtensible(obj)
console.log('关键词`isExtensible`: 可以查目标对象是否可以扩展,例如对象obj可以扩展: ' + result_Extensible)

// --------------------------------------------
/* Reflect.ownKeys()
说明: 返回一个由目标对象自身的属性键组成的数组。
语法: Reflect.ownKeys(target)
参数说明:
    target
        获取自身属性键的目标对象。 */
const result_Ownkeys = Reflect.ownKeys(obj)
console.log('关键词`ownKeys`: 获取自身属性键的目标对象,例如对象obj的自身属性键组成的数组为: ' + result_Ownkeys)

// ---------------------------------------------
/* Reflect.preventExtensions()
说明: 阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。返回一个布尔值
语法: Reflect.preventExtensions(target)
参数说明:
    target
        阻止扩展的目标对象 */
const result_noExtensible = Reflect.preventExtensions(obj)
console.log('关键词`preventExtensions`: 可以设置对象不可以扩展,例如对象obj将不再可以扩展: ' + result_noExtensible)

// -----------------------------------------------
/* Reflect.set()
说明: 设置一个属性,返回布尔值
语法: Reflect.set(target, propertyKey, value[, receiver])
参数说明:
    target
        设置属性的目标对象。
    propertyKey
        设置的属性的名称。
    value
        设置的值。
    receiver
        如果遇到 setter，receiver则为setter调用时的this值。 */
const result_set = Reflect.set(obj, 'Old', 5 , { age: 18 }) //如果是一个setter访问器，此访问器的this是指向第四个参数的。
console.log('关键词`set`: 可以设置对象的设置一个属性: ' + result_set + ',通过setter修改的值为:' + Reflect.get(obj, 'Old'))

// --------------------------------------------------
/* Reflect.setPrototypeOf()
说明: 设置对象的原型（即内部的 [[Prototype]] 属性）为另一个对象或 null,返回 一个布尔值
语法: Reflect.setPrototypeOf(target, prototype)
参数说明:
    target
        设置原型的目标对象。
    prototype
        对象的新原型（一个对象或 null）。  */
const result_setPrototype = Reflect.setPrototypeOf(obj, Object.prototype)
console.log('关键词`setPrototypeOf`: 可以设置对象的原型为一个对象或 null: ' + result_setPrototype)