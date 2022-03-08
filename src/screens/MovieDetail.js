import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router"
import { getMovie } from "../store/Movie/actions";

export const MovieDetail =()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state=>state['movieReducer'].movie);
    useEffect(async ()=>{
        await loadMovie();
    },[])
    const loadMovie =async ()=>{
        await dispatch(getMovie(id));
    }
    return (
        <section>
            <img src={movie.medium_cover_image} alt="" />
            this is movie details : {movie.title || ''}
        </section>
    )
}