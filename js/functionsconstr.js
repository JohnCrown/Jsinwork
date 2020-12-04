'use strict';
     //                   Функция конструктор для объектов
function User(name, id) { 
    this.name = name;
    this.id= id;
    this.human = true;
    this.hello = function name(params) {
        console.log(`Hello ${this.name}`);
        
    };
    
}

User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`);
    
};

const ivan = new User('Ivan', 28);//Теперь при вызове функция создает новый объект
const alex = new User('Alex', 20);

ivan.exit();

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();