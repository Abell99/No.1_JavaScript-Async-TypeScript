/* 
    TypeScript 接口与抽象类
*/
export {}

/* 
    接口：
        关键词：interface
    什么使用需要接口？
        两个类中，拥有相同的方法，但是方法的实现过程不一样，可以用来约束必须有此方法
        推荐一个接口，只去约束一个方法，不需要方法体
*/

interface Eat {
    eat (food: string): void // 在接口中限制行为的参数类型，返回值类型
}
interface Run {
    run (distance: number): void // 推荐一个接口只限制一个行为
}

class Person implements Eat, Run { // 接口关键词后面可以接多个接口，可以用逗号隔开即可
    eat (food: string): void {
        console.log(`优雅的吃${food}`)
    }
    run (distance: number): void {
        console.log(`直立行走${distance}`)
    }
}
class Animal implements Eat, Run {
    eat (food: string): void {
        console.log(`呼噜呼噜的吃${food}`)
    }
    run (distance: number): void {
        console.log(`爬行${distance}`)
    }
}

// ----------------------------------------------------
/* 
    抽象类：
        关键词：abstract
    什么时候需要使用抽象类:
        用来抽象类的属性与方法 ,一个类比较抽象的时候，就可以使用抽象类来概括
        作为抽象类的的类，只能被继承，不能作为子类，方法体不是必要的
*/

abstract class Animal_new {
    eat (food: string): void {
        console.log(`呼噜噜的吃：${food}`)
    }

    abstract run (distance: number): void // 抽象类中，如果定义的方法不具备方法体，应该使用抽象类关键词来修饰
}
class Dog extends Animal_new {
    run(distance: number): void {
        console.log('四脚爬行', distance)
    }
}
const chinese_rural_dog = new Dog()
chinese_rural_dog.eat('骨头')
chinese_rural_dog.run(100)
