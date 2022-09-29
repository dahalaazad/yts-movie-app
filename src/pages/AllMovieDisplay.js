import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {getMovies} from "../utils/getMovies";
import ReactImageFallback from "react-image-fallback";

export const AllMovieDisplay = ({moviesProp}) => {
    const movies = useSelector(state => state.movie.movies);
    //console.log(moviesProp)
    return (
        <section className='movie-bg' style={{
            backgroundImage: `url(${movies[3]?.background_image_original})`
        }}>
            <div className="flex wrap justify-center all-movie">
                {moviesProp.map((mov, key) => (
                    <div className="card ma-md movie-card" key={key}>
                        <Link to={`/movies/${mov.slug}`}
                              state={{
                                  currentMovieId: mov.id,
                                  director: mov.director,
                                  directorPic: mov.directorPic,
                                  directorId: mov.directorId
                              }}>
                            <div className="movie-poster">
                                {/*<img src={mov.medium_cover_image} alt=""/>*/}
                                <ReactImageFallback
                                    src={mov.medium_cover_image}
                                    fallbackImage={`https://image.tmdb.org/t/p/original${mov.TMDB_poster}`}
                                />

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