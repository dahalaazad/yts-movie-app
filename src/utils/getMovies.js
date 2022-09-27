import {
    APIGetAllMovies,
    APIGetFavMovies,
    APIGetFurtherOMDBDetails,
    APIGetMovie
} from "../api/movie";
// import {useDispatch} from "react-redux";
import {setAllMovies, setFavMovies, setSingleMovie} from "../store/movieSlice";
import {greatMovies} from "./favMovies";

// export const searchMovies=()=>{}
//
// export const getMovies = () => async dispatch => {
//     const res = await APIGetAllMovies();
//     //console.log('res--->',res)
//     // console.log(res?.data?.data?.movies ?? []);
//     dispatch(setAllMovies(res?.data?.data?.movies ?? []))
// }

export const getMovies = () => async dispatch => {
    const res = await APIGetAllMovies();
    const movieList = res?.data?.data?.movies
    //console.log(movieList)
    // const newUpdated = await APIGetFurtherDetails(`tt0109830`);
    // console.log('new===>',newUpdated.data)
    await Promise.all(movieList.map(item => APIGetFurtherOMDBDetails(item.imdb_code))).then(
        res => {
            //console.log(res)
            const List = res.map((x, index) => {
                movieList[index].director = x.data.Director
                //console.log(movieList[index].title,'---->',x.data.Title)
            })
            //console.log(movieList)
            dispatch(setAllMovies(movieList))
        }
    )

}

export const getMovie = (id) => async dispatch => {
    const res = await APIGetMovie(id);
    dispatch(setSingleMovie(res?.data?.data?.movie ?? []))
}
//
//
