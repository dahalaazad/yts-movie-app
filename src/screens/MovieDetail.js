import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useLocation, useParams} from "react-router"
import { getMovie } from "../store/Movie/actions";

export const MovieDetail = () => {
    const {slug } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const movie = useSelector(state => state.movie.movie);
    const id = location.state?.currentMovieId;
    console.log(location.state?.currentMovieId,'movieID')
    //console.log(movie);
    //console.log(movie.genres)
    useEffect(async () => {
        await loadMovie();
    }, [])
    const loadMovie = async () => {
        await dispatch(getMovie(id));
    }
    return (
        <section>
            <div className="movie-in-detail flex card">
                <div className="poster-medium" >
                    <img src={movie.medium_cover_image} alt="" />
                </div>
                <div className="details">
                    <h3>{movie.title || ''}</h3>
                    <h3>{movie.year}</h3>
                    {/* index if not 0, insert '/' before the element in the array */}
                    <h3>Genres: {movie.genres?.map((film, i) => (i ? '/ ' : '') + film)}</h3>

                    {/* use condtional statement to not give '/' to last element in the genre array */}
                    
                    <h3>Available in: </h3>
                    <div className="ratings">
                        <h3>IMDB Ratings: {movie.rating}</h3>
                    </div>
                </div>
            </div>
            <div className="lower-half flex">
                <div className="synopsis" style={{textAlign:'justify'}}>
                    <h1>Synopsis</h1>
                    <p>{movie.description_full}</p>
                </div>
                <div className="persons-in-movie">
                    <div className="director">
                    Director:
                    </div>
                    {/* {console.log(movie.cast)} */}
                   <div className="cast">
                   Cast:
                    {movie.cast?.map((actor,i)=> (
                        <div className="flex" key={actor.imdb_code}>
                            <img src={actor.url_small_image} alt="" />
                            <p>{actor.name} as {actor.character_name} </p>
                        </div>
                    ))}
                   </div>
                </div>
            </div>
        </section>
    )
}