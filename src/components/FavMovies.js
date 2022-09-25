import {useEffect} from "react";
import {getFavMovies, greatMovies} from "../utils/favMovies";
import {useDispatch, useSelector} from "react-redux";

export const FavMovies = () => {
    const moviesFav = useSelector(state => state.favMovies);
    const dispatch = useDispatch();

    useEffect(async () => {
        await loadMovies();
    }, []);

    const loadMovies = async () => {
        await dispatch(getFavMovies('tt0372784'));
    }

    // const List = greatMovies.map(item => {
    //    await dispatch ( getFavMovies(item.imdbCode));
    // })
    // console.log(List)
    return (
        <div>
            XX </div>
    );
};


