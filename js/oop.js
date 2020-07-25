"use strict";
                                             //OOP Парадигма как делать правильную архитектуру
// let str = "some",
//     strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = { //Создаем один прототип с нужными свойствами
    health: 400,
    armor: 100,
    sayHello: function (params) {
        console.log("Hello");
        
    }
};
const john = Object.create(soldier);//Мы создаем новый оъект john который будет прототипно наследоваться от объекта soldier
// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);//Благодаря прототипу получил свойство
john.sayHello();