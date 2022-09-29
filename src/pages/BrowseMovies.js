import axios from "axios";
import {AllMovieDisplay} from "./AllMovieDisplay";
import {useEffect, useState} from "react";
import {getMovies} from "../utils/getMovies";
import {useDispatch, useSelector} from "react-redux";


export const BrowseMovies = () => {
    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch();
    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const pages = [1,2,3,4,5];
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
        <>
            <div className="pagination buttons flex justify-center">
                {page !==1 && <button onClick={()=>setPage(page-1)}>Prev</button>}
                {pages.map(item => (
                    <button key={item} className='mx-lg border bg-yts-green pa-md' onClick={()=>setPage(item)}>{item}</button>
                ))}
                <button onClick={()=>setPage(page+1)}>Next</button>

            </div>
            <AllMovieDisplay moviesProp={movies}/>
        </>
    );
};


