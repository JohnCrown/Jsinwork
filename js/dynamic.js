//                         Динамическая типизация
"use strict";

console.log(typeof(String(null)));//Устаревший способ
console.log(typeof(String(4)));

console.log(typeof(null + '5'));//Конкатенация 

const num = 5 ;

console.log("https://vk.com/catalog" + num);

const fontSize = 26 + 'px';

//To number
console.log(typeof(Number('4')));

console.log(typeof(+'5'));
console.log(typeof(parseInt("15px",5)));

let asnwer = +prompt ("Hello", "");
//Все что получаем от пользователя это будет строка.

//To boolean
0, '' , null , undefined , NaN; //ЭТО FALSE

let switcher = null;

if (switcher) {
    console.log("Working...");
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!"44444"));







