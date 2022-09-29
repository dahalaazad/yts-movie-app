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

export const getMovies = (page) => async dispatch => {
    console.log(page)
    const res = await APIGetAllMovies(page);
    // console.log(res)
    const movieList = res?.data?.data?.movies
    //console.log(movieList)

    await Promise.all(movieList.map(item => APIGetFurtherTMDBDetails(item.imdb_code))).then(
        res => {
            res.map((x,index) => {
                //console.log(x.data.movie_results)
                x.data.movie_results.map((y) => {
                    // console.log(index,'===>',y)
                    movieList[index].TMDB_ID = y.id;
                    movieList[index].TMDB_poster = y.poster_path;
                })
            })
            // console.log(movieList)

        }
    )
    dispatch(setAllMovies(movieList))

}

export const getMovie = (id) => async dispatch => {
    const res = await APIGetMovie(id);
    const movieDetails = res?.data?.data?.movie;
    // console.log(movieDetails)
    const TMDB_Details = await APIGetFurtherTMDBDetails(res?.data?.data?.movie?.imdb_code);
    //console.log(TMDB_Details)
    const TMDB_Code = TMDB_Details?.data?.movie_results[0]?.id
    const TMDB_movie_poster = TMDB_Details?.data?.movie_results[0]?.poster_path;
    console.log(TMDB_movie_poster)
    const TMDB_Cast_Details = await APIGetTMDBCastDetails(TMDB_Code);
    const TMDB_Director = TMDB_Cast_Details?.data?.crew.filter(a => a.job === 'Director')
    //console.log(TMDB_Director[0])
    //console.log(TMDB_Cast_Details?.data?.cast)
    movieDetails.director = TMDB_Director[0].name;
    movieDetails.directorId = TMDB_Director[0].id;
    movieDetails.directorPic = TMDB_Director[0].profile_path;
    movieDetails.TMDB_cast = TMDB_Cast_Details?.data?.cast;
    movieDetails.TMDB_poster = TMDB_movie_poster;
    // console.log(movieDetails)
    dispatch(setSingleMovie(movieDetails ?? []))
}
//
//
