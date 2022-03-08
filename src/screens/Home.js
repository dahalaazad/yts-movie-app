import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getMovies } from "../store/Movie/actions";

export const Home =()=>{
    const movies = useSelector(state=>state['movieReducer'].movies);
    const dispatch = useDispatch();

    useEffect(async ()=>{
       await loadMovies();
    },[]);

    const loadMovies =async ()=>{
        await dispatch(getMovies());
    }
    return (
        <section>
            <div className="flex wrap">
            {movies.map((mov,key)=>(
                <div className="card ma-md">
                    <Link to={'/movie/'+mov.id} key={key}>{mov.title}</Link>
                </div>
            ))}
            </div>
        </section>
    )
}