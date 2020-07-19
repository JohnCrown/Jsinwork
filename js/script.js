"use strict";


const  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {}, //создать пустой объект
    actors: {},
    genres: [],
    privat: false


};
let LastFilm = prompt("Один из последних просмотренных фильмов?"),
    RatingFilm = +prompt("На сколько оцените его?"),
    LastFilm2 = prompt("Один из последних просмотренных фильмов?"),
    RatingFilm2 = +prompt("На сколько оцените его?");


personalMovieDB.movies[LastFilm]= RatingFilm;
personalMovieDB.movies[LastFilm2]= RatingFilm2;

console.log(personalMovieDB);



    