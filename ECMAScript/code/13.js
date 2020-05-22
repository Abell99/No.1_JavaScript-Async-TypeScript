/* 
    class类
*/

// -----------------------------------
/* 定义一个class类 */
class Person {
    // 构造器里面放属性
    constructor (name, sex) {
        this.name = name
        this.sex = sex
    }
    // 定义方法
    say () {
        console.log(`hi,my name is ${this.name} i am a ${this.sex}`)
    }

    // ES2015中新增添加静态成员的static关键词
    static create (name, sex) {
        return new Person(name, sex)
    }
}

// 实例化对象
const abel = new Person('abel','man')
abel.say()

// 通过静态方法实例对象
const tom = Person.create('tom', 'man')
tom.say()


// -------------------------------------
/* 类的继承`extends`
    以前通过原型的方式来实现继承,真得是挺乱的
*/
class Student extends Person {
    constructor (name, age) {
        // 使用super访问父类
        super(name)
        this.age = age
    }
    hello () {
        super.say() // 但是字类为访问的无法获取 hi,my name is doinb i am a undefined
        console.log(`age: ${this.age}`)
    }
    static create (name, age) {
        return new Student(name, age)
    }
}
const doinb = Student.create('doinb', '23')
doinb.hello()