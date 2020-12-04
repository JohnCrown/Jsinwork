//touchstart
//touchmove
//touchend
//touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
     const box = document.querySelector('.box');

     box.addEventListener('touchstart', (e) =>{
        e.preventDefault();//Отменяем стандартное поведение браузера перед нашим событием

        console.log('Start');
        console.log(e.targetTouches);

    });

     box.addEventListener('touchmove', (e) =>{
         e.preventDefault();//Отменяем стандартное поведение браузера перед нашим событием

         console.log(e.targetTouches[0].pageX);

     });


    //  box.addEventListener('touchend', (e) =>{
    //     e.preventDefault();//Отменяем стандартное поведение браузера перед нашим событием

    //     console.log('End');

    // });

});

//touches - список всех пальцев которые взаимодействуют с экраном
//targetTouches
//changedTouches