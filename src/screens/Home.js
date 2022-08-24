import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {getMovies} from "../store/Movie/actions";

export const Home = () => {
    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch();

    useEffect(async () => {
        await loadMovies();
    }, []);

    const loadMovies = async () => {
        await dispatch(getMovies());
    }
    return (
        <section>
            <div className="flex wrap">
                {movies.map((mov, key) => (
                    <div className="card ma-md" key={key}>
                        <Link to={`/movies/${mov.slug}`} state={{ currentMovieId: mov.id }}>
                            <div className="movie-poster">
                                <img src={mov.medium_cover_image} alt=""/>
                            </div>
                            <div className="movie-title">
                                {mov.title}
                            </div>

                        </Link>
                        <div className="movie-year">
                            {mov.year}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}