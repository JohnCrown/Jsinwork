"use strict";

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
const script = document.createElement('script');
script.src = src;
script.async = false; //Скрипты выполняются строго друг за другом
document.body.append(script);
    
}

loadScript ("js/test.js");
loadScript ("js/Some.js");