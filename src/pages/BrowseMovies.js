import axios from "axios";
import {AllMovieDisplay} from "./AllMovieDisplay";
import {useEffect, useState} from "react";


export const BrowseMovies = () => {
    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const pages = [1,2,3,4,5];
    useEffect(async () => {
        await axios
            .get(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
            .then((res) => setListMovies(res?.data?.data?.movies));
    }, [page]);

    console.log(listMovies)
    return (
        <>
            <div className="buttons flex-centered">
                {pages.map(item => (
                    <button className='mx-lg border bg-yts-green pa-md' onClick={()=>setPage(item)}>{item}</button>
                ))}

            </div>
            <AllMovieDisplay moviesProp={listMovies}/>
        </>
    );
};


