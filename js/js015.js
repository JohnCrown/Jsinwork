'use strict';
const  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {}, //создать пустой объект
    actors: {},
    genres: [],
    privat: false


};


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


if (personalMovieDB.count < 10){

console.log("Просмотрено довольно мало фильмов");

}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30 ){
    console.log("Вы киноман");

}else {
    console.log("Произошла ошибка");
}


    
console.log(personalMovieDB);