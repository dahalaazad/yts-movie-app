import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router"
import { getMovie } from "../store/Movie/actions";

export const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state['movieReducer'].movie);
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
                    <h3>Genres: {movie.genres?.map((film, i) => (i ? '/ ':'')+film)}</h3>
                   
                    {/* use condtional statement to not give '/' to last element in the genre array */}
                    <h3>Available in: </h3>
                    <div className="ratings">
                        IMDB Ratings: {movie.rating}
                    </div>
                </div>
            </div>
            <div className="lower-half flex">
                <div className="synopsis">
                    <h1>Synopsis</h1>
                    <p>{movie.description_full}</p>
                </div>
                <div className="persons-in-movie">
                    Director
                </div>
            </div>

            {console.log(movie)}
        </section>
    )
}