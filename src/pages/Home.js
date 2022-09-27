import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {getMovies} from "../utils/getMovies";
import {logDOM} from "@testing-library/react";
import {getDirectorName} from "../utils/favMovies";

export const Home = () => {
    const movies = useSelector(state => state.movie.movies);
    const favMovies = useSelector(state => state.movie.favMovies)
    //console.log(favMovies)
    const dispatch = useDispatch();
    //console.log(movies[0]?.background_image)
    useEffect(async () => {
        await loadMovies();
    }, []);

    const loadMovies = async () => {
        await dispatch(getMovies());
        //await dispatch(getDirectorName(favMovies))
    }
    return (
        <section className='movie-bg' style={{
            backgroundImage: `url(${movies[3]?.background_image_original})`
        }}>
            <div className="flex wrap  justify-center" style={{
                margin: '0 12.5%  0 12.5%'
            }}

            >
                {favMovies.map((mov, key) => (
                    <div className="card ma-md movie-card" key={key}>
                        <Link to={`/movies/${mov.slug}`} state={{currentMovieId: mov.id,director:mov.director,directorPic:mov.directorPic}}>
                            <div className="movie-poster">
                                <img src={mov.medium_cover_image} alt=""/>
                            </div>
                            <div className="movie-details flex">
                                {mov.language !== 'en' ?
                                    <div className="movie-language pr-xs">
                                        [{mov.language.toUpperCase()}]
                                    </div>
                                    : null
                                }
                                <div className="">
                                    {mov.title.length > 27 ? mov.title.substring(0, 27) + '...' : mov.title}
                                </div>
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