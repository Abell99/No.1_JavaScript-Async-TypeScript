"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        // 类是属性必须拥有值，要不再这里赋值初始值，要不在构造函数中，赋值
        this.name = 'init name';
        this.className = '1班'; // 公有属性
        this.grade = 2016; // 只读属性
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("i am " + this.name + "," + this.age);
        console.log(msg);
        console.log(this.gender);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // es6固有的私有修饰符,外部无法访问构造函数，只能通过class的公开方法来实例化
    function Student(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log(_this.gender); // 私有属性字类无法继承，但是受保护的属性可以被字类继承
        return _this;
    }
    // 通过static公开的构造函数方法 来实例化对象
    Student.create = function (name, age) {
        return new Student(name, age);
    };
    return Student;
}(Person));
var abel = new Person('abel', 18);
console.log(abel.className); // 公有属性可以在实例化对象中直接访问
// console.log(abel.gender, abel.age) // 私有属性和受保护的属性都无法访问
var jack = Student.create('jack', 18);
//# sourceMappingURL=06.js.map