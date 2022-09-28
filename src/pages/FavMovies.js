import {useDispatch, useSelector} from "react-redux";
import {AllMovieDisplay} from "./AllMovieDisplay";
import {useEffect} from "react";
import {getMovies} from "../utils/getMovies";
import {getFavMovies} from "../utils/favMovies";


export const FavMovies = () => {
    const favMovies = useSelector(state => state.movie.favMovies);
    const dispatch = useDispatch();
    useEffect(async () => {
        await loadMovies();
    }, []);

    const loadMovies = async () => {
        await dispatch(getFavMovies());
        //await dispatch(getDirectorName(favMovies))
    }
    // console.log(favMovies)
    return (
        <div>
            <AllMovieDisplay moviesProp={favMovies}/>
        </div>
    );
};


