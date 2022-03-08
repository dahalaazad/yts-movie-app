import { APIGetAllMovies, APIGetMovie } from "../../api/movie";
import { SET_MOVIES, SET_MOVIE } from "./actionTypes";

export const setMovies =(data)=>({
    type: SET_MOVIES,
    payload: data
});

export const setMovie =(data)=>({
    type: SET_MOVIE,
    payload: data
});

export const searchMovies=()=>{}

export const getMovies=()=>async dispatch=>{
    const res = await APIGetAllMovies();
    console.log(res?.data?.data?.movies ?? []);
    dispatch(setMovies(res?.data?.data?.movies ?? []))
}

export const getMovie=(id)=>async dispatch=>{
    const res = await APIGetMovie(id);
    dispatch(setMovie(res?.data?.data?.movie ?? []))
}


