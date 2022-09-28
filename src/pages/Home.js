import {useDispatch, useSelector} from "react-redux";
import {AllMovieDisplay} from "./AllMovieDisplay";
import {useEffect} from "react";
import {getMovies} from "../utils/getMovies";
import {getFavMovies} from "../utils/favMovies";


export const Home = () => {
    const homeMovies = useSelector(state => state.movie.movies);

    //console.log(favMovies)
    return (
        <div>
            <AllMovieDisplay moviesProp={homeMovies}/>
        </div>
    );
};


