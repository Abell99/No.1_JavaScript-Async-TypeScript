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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (food) {
        console.log("\u4F18\u96C5\u7684\u5403" + food);
    };
    Person.prototype.run = function (distance) {
        console.log("\u76F4\u7ACB\u884C\u8D70" + distance);
    };
    return Person;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("\u547C\u565C\u547C\u565C\u7684\u5403" + food);
    };
    Animal.prototype.run = function (distance) {
        console.log("\u722C\u884C" + distance);
    };
    return Animal;
}());
// ----------------------------------------------------
/*
    抽象类：
        关键词：abstract
    什么时候需要使用抽象类:
        用来抽象类的属性与方法 ,一个类比较抽象的时候，就可以使用抽象类来概括
        作为抽象类的的类，只能被继承，不能作为子类，方法体不是必要的
*/
var Animal_new = /** @class */ (function () {
    function Animal_new() {
    }
    Animal_new.prototype.eat = function (food) {
        console.log("\u547C\u565C\u565C\u7684\u5403\uFF1A" + food);
    };
    return Animal_new;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.run = function (distance) {
        console.log('四脚爬行', distance);
    };
    return Dog;
}(Animal_new));
var chinese_rural_dog = new Dog();
chinese_rural_dog.eat('骨头');
chinese_rural_dog.run(100);
//# sourceMappingURL=07.js.map