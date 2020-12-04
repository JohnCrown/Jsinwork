'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);

//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout(){
//             console.log(this);//Простой вызов фугкции это не метод объекта
//         }
//         shout();//Функция вызова
//     }

// };

// obj.sum();

// function User(name, id) { 
//     this.name = name;
//     this.id= id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// function sayName (surname) {
//     console.log(this);//Контекст вызова, получаем объект к которому привязались
//     console.log(this.name + '',surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');//Smith - аргумент
// sayName.apply(user, ['Smith']);//Apply передавать аргумент в массиве

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


//1) Обычная функция this = window , но если стоит use strict - undefined
//2)Контекст у методов объектов - сам объект
//3)This в конструкторах и классах - новый экземпляр объекта
//4)Ручная привязка this : call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', (e) => { //Контекст вызова - сам элемент вызова
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }


};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));