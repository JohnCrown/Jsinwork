"use strict";

const arr = [0,11,2,28,6,13];

arr.sort();
console.log(arr);

function comapareNum (a, b){
    return a - b ;
}
// console.log(arr.length);//Последний индекс в массиве + 1 - св-во leght
// arr[99] = 0;

// // arr.pop();
// arr.push(10);
// console.log(arr);
arr.forEach(function(item, i, arr ){
    console.log(`${i}: ${item} внутри массива ${arr}`);


});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);//Чтобы обратиться к массиву поставить [] и указать индекс
}

for ( let value of arr) {
    console.log(value);
}

// const str = prompt("", "");
// const products = str.split(",");
// products.sort();
// console.log(products.join('; '));
