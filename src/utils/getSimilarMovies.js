import {APIGetSimilarMovies} from "../api/movie";
import {setSimilarMovies} from "../store/movieSlice";


export const getSimilarMovies = (id) => async dispatch => {
    // console.log(id)
    const res = await APIGetSimilarMovies(id);
    // console.log(res)
    const movieSuggestions= res?.data?.data?.movies;
    dispatch(setSimilarMovies(movieSuggestions ?? []))
}