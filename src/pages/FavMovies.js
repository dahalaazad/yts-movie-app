import {useDispatch, useSelector} from "react-redux";
import {AllMovieDisplay} from "../components/partials/AllMovieDisplay";
import {useEffect} from "react";
import {getMovies} from "../utils/getMovies";
import {getFavMovies} from "../utils/favMovies";
import {FavMovieDisplay} from "./FavMovieDisplay";
import {Outlet} from "react-router-dom";


export const FavMovies = () => {
    const favMovies = useSelector(state => state.movie.favMovies);
    const dispatch = useDispatch();
    const parentRoute = 'fav-movies'
    useEffect(async () => {
        await loadMovies();
    }, []);

    const loadMovies = async () => {
        await dispatch(getFavMovies());
        //await dispatch(getDirectorName(favMovies))
    }
    // console.log(favMovies)
    return (
        <div className='movie-lower'>
            <FavMovieDisplay data={favMovies}/>
            <Outlet/>
        </div>
    );
};


