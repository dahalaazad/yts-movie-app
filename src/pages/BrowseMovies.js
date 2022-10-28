import axios from "axios";
import {AllMovieDisplay} from "../components/partials/AllMovieDisplay";
import {useEffect, useState} from "react";
import {getMovies} from "../utils/getMovies";
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {YtsPagination} from "../components/YtsPagination";


export const BrowseMovies = () => {
    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch();
    // const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const bg_style = {
        background: `url(${movies[3]?.background_image_original}),rgba(${1},${0},${0})`,
        backgroundSize: '100% 600px',
        backgroundRepeat: 'no-repeat',
    }
    // useEffect(async () => {
    //     await axios
    //         .get(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
    //         .then((res) => setListMovies(res?.data?.data?.movies));
    // }, [page]);

    useEffect(async () => {
        await loadMovies();
    }, [page]);

    const loadMovies = async () => {
        await dispatch(getMovies(page));
        //await dispatch(getDirectorName(favMovies))
    }

    // console.log(listMovies)
    return (
        <div className='bg-yts-dark'>
            <YtsPagination page={page} setPage={setPage}/>
            <AllMovieDisplay data={movies}/>
        </div>
    );
};


