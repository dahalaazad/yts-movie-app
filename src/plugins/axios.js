import axios from 'axios';

export const movieAxios =axios.create({
    baseURL:"https://yts.mx/api/v2/"
});

export const movieOMDBAxios = axios.create({
    baseURL:"https://omdbapi.com/"
});

export const movieTMDBAxios = axios.create({
    baseURL:"https://api.themoviedb.org/3/find/"
});

export const movieTMDBCastDetailsAxios = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/"
});


