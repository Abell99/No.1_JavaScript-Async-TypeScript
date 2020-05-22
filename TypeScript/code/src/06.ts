/* 
    TypeScript类的运用
*/
export {}
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