import {useDispatch, useSelector} from "react-redux";
import {AllMovieDisplay} from "../components/partials/AllMovieDisplay";
import {useEffect} from "react";
import {getMovies} from "../utils/getMovies";
import {getFavMovies} from "../utils/favMovies";
import HOC from "../HOC";


export const Home = () => {
    const homeMovies = useSelector(state => state.movie.movies);
    const List = HOC(AllMovieDisplay,homeMovies)
    // console.log(List)

    //console.log(favMovies)
    return (
        <div className='movie-lower'>
            {/*<List/>*/}
            <AllMovieDisplay data={homeMovies}/>

        </div>
    );
};


