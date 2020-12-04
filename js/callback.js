"use strict";  //Callback функции выполняются строго после опр событий

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    },500);
    
}

function second () {
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
function done (){
    console.log("Я прошел этот урок!");

}
learnJS('JavaScript', done);


//  Это глаынй шаблон callback функции.В другую функцию 
//  в качестве аргумента передать другую функцию
learnJS (`JavaScript`, function(){
    console.log("Я прошел урок", done);//done без скобок функция ,
    // выполнится пока дойдет и передается вместо callback
});
