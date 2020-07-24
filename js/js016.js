"use strict"

function showFirstMessage(text) {
    console.log(text);
    
}

showFirstMessage("Hello World");

// function calc(a,b) {
//     return (a + b);
    
// }

const logger = function () {

    console.log("Hello");
    
};

logger();

const calc = (a, b) => {
    console.log("1");
    return a + b ;
}; //Стрелочная функция