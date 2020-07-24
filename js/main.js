"use strict";
// let numberOfFilms ;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     }
    
// }
// start();
const personalMovieDB = {

    count: 0,
    movies: {}, //создать пустой объект
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        }
        
    },
    rememberMyFilms: function (){
    

        for (let i = 0; i < 2;i++){
               const LastFilm = prompt("Один из последних просмотренных фильмов?", ""),
                RatingFilm = prompt("На сколько оцените его?", ""); 
               if (LastFilm != null && LastFilm != "" && LastFilm.length < 50 &&
                   RatingFilm != null && RatingFilm != "" && RatingFilm.length < 50){
                   personalMovieDB.movies[LastFilm] = RatingFilm;
                   console.log("good!");
               }else {
            console.log("Error");
            i--;
               }
            }
        },

        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10){
            
            console.log("Просмотрено довольно мало фильмов");
            
            }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
                console.log("Вы классический зритель");
            }else if (personalMovieDB.count >= 30 ){
                console.log("Вы киноман");
            
            }else {
                console.log("Произошла ошибка");
                 }
            
            },
    showMyDB: function () {
        if (!hidden) {
            console.log(personalMovieDB);
            
        }else {
            console.log("ShowMyDB Error");
        }
    },

    writeYourGenres: function () {
        for (let z = 1;z <= 3;z++) {
            // const favoriteFilm = prompt( `Ваш любимый жанр под номером ${z} `);
                  
            //       personalMovieDB.genres[z - 1] = favoriteFilm;
            // while(personalMovieDB.genres == '' || personalMovieDB.genres == null ){
                let genre = prompt ( `Ваш любимый жанр под номером ${z} `);
            

            if (genre === ""  || genre === null) {
                console.log("Некорректные данные");
                z--;
                
            }else {
                personalMovieDB.genres[z -1] = genre;

            }

            // }
            
        }
        personalMovieDB.genres.forEach((item, z) =>{
            console.log(`Любимый жанр ${z + 1} это ${item}`);


        });
        
    },






    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    } 
    


    
    
        
        
    


};
console.log(personalMovieDB);

// function rememberMyFilms() {
    

// for (let i = 0; i < 2;i++){
//        const LastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//         RatingFilm = prompt("На сколько оцените его?", ""); 
//        if (LastFilm != null && LastFilm != "" && LastFilm.length < 50 &&
//            RatingFilm != null && RatingFilm != "" && RatingFilm.length < 50){
//            personalMovieDB.movies[LastFilm] = RatingFilm;
//            console.log("good!");
//        }else {
//     console.log("Error");
//     i--;
//        }
//     }
// }

// rememberMyFilms();

// let n = 0;
// while (n < 2) {
//     n++;
//      const LastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//      RatingFilm = prompt("На сколько оцените его?", ""); 
// if (LastFilm != null && LastFilm != "" && LastFilm.length < 50 &&
// RatingFilm != null && RatingFilm != "" && RatingFilm.length < 50){
// personalMovieDB.movies[LastFilm] = RatingFilm;
// console.log("Cycle While!");
// }
// }


// let k = 0;
// do {
//     const LastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//         RatingFilm = prompt("На сколько оцените его?", ""); 
//     if (LastFilm != null && LastFilm != "" && LastFilm.length < 50 &&
//     RatingFilm != null && RatingFilm != "" && RatingFilm.length < 50){
//     personalMovieDB.movies[LastFilm] = RatingFilm;
//     k++;
//     console.log("Cycle DO!");
// }
// }
// while (k < 2)

// function detectPersonalLevel(){
// if (personalMovieDB.count < 10){

// console.log("Просмотрено довольно мало фильмов");

// }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//     console.log("Вы классический зритель");
// }else if (personalMovieDB.count >= 30 ){
//     console.log("Вы киноман");

// }else {
//     console.log("Произошла ошибка");
//      }

// }
    
// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);

        
//     }else {
//         console.log("ShowMyDB Error");
//     }

    
// }
// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
        
//     }else {
//         console.log("ShowMyDB Error");
//     }
// }



// showMyDB ();
// function writeYourGenres() {
//     for (let z = 1;z <= 3;z++) {
//         // const favoriteFilm = prompt( `Ваш любимый жанр под номером ${z} `);
              
//         //       personalMovieDB.genres[z - 1] = favoriteFilm;
//         personalMovieDB.genres[z -1] = prompt ( `Ваш любимый жанр под номером ${z} `);
        




//     }
    
// }
// writeYourGenres();