import {APIGetSearchDetails} from "../api/movie";
// import {setSearchMovies} from "../store/movieSlice";


export const getSearchResults = (name) =>async dispatch=>{
    console.log(name)
    const res = await APIGetSearchDetails(name.toLowerCase());
    // console.log(res)
    const movieDetails = res?.data?.data?.movies;
    const movieSearchList = movieDetails?.map(item => item.title)
    console.log(movieSearchList)
    // dispatch(setSearchMovies(movieDetails ?? []))
}