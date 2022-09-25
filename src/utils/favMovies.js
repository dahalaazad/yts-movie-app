import {useEffect} from "react";
import {getMovies} from "./getMovies";
import {APIGetAllMovies, APIGetFavMovies} from "../api/movie";
import {setAllMovies, setFavMovies} from "../store/movieSlice";

export const greatMovies = [
    {label: 'Batman Begins', imdbCode: 'tt0372784'},
    {label: 'The Dark Knight', imdbCode: 'tt0468569'},
    {label: 'The Dark Knight Rises', imdbCode: 'tt1345836'},
    {label: 'Forrest Gump', imdbCode: 'tt0109830'},
    {label: 'Cast Away', imdbCode: 'tt0162222'},
    {label: 'Iron Man', imdbCode: 'tt0371746'},
    {label: 'Top Gun: Maverick', imdbCode: 'tt1745960'},
    {label: 'Andhadhun', imdbCode: 'tt8108198'},
    {label: 'The Usual Suspects', imdbCode: 'tt0114814'},
];


export const getFavMovies = (id) => async dispatch =>{
  await Promise.all(greatMovies.map(item => APIGetFavMovies(item.imdbCode))).then(
      res=> {
          //console.log(res)
          const List = res.map(item => item?.data?.data?.movie)
          console.log(List)
          dispatch(setFavMovies(List))
      }
  )}




