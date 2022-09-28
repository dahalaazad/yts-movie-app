import {
    APIGetAllMovies,
    APIGetFavMovies,
    APIGetFurtherOMDBDetails, APIGetFurtherTMDBDetails,
    APIGetMovie, APIGetTMDBCastDetails
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
                movieList[index].director = x.data.Director;
                movieList[index].directorPic = x.data.profile_path;
                movieList[index].directorId = x.data.id;
                //console.log(movieList[index].title,'---->',x.data.Title)
            })
            //console.log(movieList)
            dispatch(setAllMovies(movieList))
        }
    )

}

export const getMovie = (id) => async dispatch => {
    const res = await APIGetMovie(id);
    const movieDetails = res?.data?.data?.movie;
    // console.log(movieDetails)
    const TMDB_Details = await APIGetFurtherTMDBDetails(res?.data?.data?.movie?.imdb_code);
    const TMDB_Code = TMDB_Details?.data?.movie_results[0]?.id
    const TMDB_Cast_Details = await APIGetTMDBCastDetails(TMDB_Code);
    const TMDB_Director = TMDB_Cast_Details?.data?.crew.filter(a => a.job === 'Director')
    console.log(TMDB_Director[0])
    //console.log(TMDB_Cast_Details?.data?.cast)
    movieDetails.director = TMDB_Director[0].name;
    movieDetails.directorId = TMDB_Director[0].id;
    movieDetails.directorPic = TMDB_Director[0].profile_path;
    movieDetails.TMDB_cast = TMDB_Cast_Details?.data?.cast;
    // console.log(movieDetails)
    dispatch(setSingleMovie(movieDetails ?? []))
}
//
//
