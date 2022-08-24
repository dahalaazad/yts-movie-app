 import { APIGetAllMovies, APIGetMovie } from "../../api/movie";
// import {useDispatch} from "react-redux";
 import {setAllMovies, setSingleMovie} from "../movieSlice";
//
// // import { SET_MOVIES, SET_MOVIE } from "./actionTypes";
// //
// // export const setMovies =(data)=>({
// //     type: SET_MOVIES,
// //     payload: data
// // });
// //
// // export const setMovie =(data)=>({
// //     type: SET_MOVIE,
// //     payload: data
// // });
// const dispatch = useDispatch();
// export const searchMovies=()=>{}
//
export const getMovies=()=>async dispatch =>{
    const res = await APIGetAllMovies();
    console.log('res--->',res)
   // console.log(res?.data?.data?.movies ?? []);
    dispatch(setAllMovies(res?.data?.data?.movies ?? []))
}

export const getMovie=(id)=>async dispatch=>{
    const res = await APIGetMovie(id);
    dispatch(setSingleMovie(res?.data?.data?.movie ?? []))
}
//
//
