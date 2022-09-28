import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router"
import {getMovie} from "../utils/getMovies";
import imdbLogo from '../assets/svg/logo-imdb.svg';
import YoutubeTrailerEmbed from "../components/partials/YoutubeTrailerEmbed";
import defaultIcon from "../assets/default_avatar.webp";
import ReactImageFallback from "react-image-fallback";


export const MovieDetail = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const movie = useSelector(state => state.movie.movie);
    const id = location.state?.currentMovieId;
    const director = location.state?.director;
    const directorPic = location.state?.directorPic;
    const directorId = location.state?.directorId;
    //console.log('movieName--->', movie.title, movie.director)
    //console.log(movie.genres)
    //console.log(directorId)
    useEffect(async () => {
        await loadMovie();
    }, [])
    const loadMovie = async () => {
        await dispatch(getMovie(id));
    }
    return (
        <section>
            <div className="top-half flex justify-evenly movie-bg" style={{
                backgroundImage: `url(${movie.background_image_original})`
            }}>
                <div className="movie-in-detail flex pa-md ">
                    <div className="left-half">
                        <div className="poster-medium pr-lg ">
                            <img className='movie-poster' src={movie.medium_cover_image}
                                 alt={`${movie.title}-movie-poster`}/>
                        </div>
                        <div className="dload-button bg-yts-green text-light text-center my-md mr-lg py-xs">
                            Download
                        </div>
                    </div>
                    <div className="details movie-title">
                        <h3 className='fs-xl'>{movie.title || ''}</h3>
                        <h3>{movie.year} {`[${movie.language?.toUpperCase()}]`}</h3>
                        {/* index if not 0, insert '/' before the element in the array */}
                        <h3>{movie.genres?.map((film, i) => (i ? '/ ' : '') + film)}</h3>

                        {/* use conditional statement to not give '/' to last element in the genre array */}

                        <h3 className='flex'>Available in:
                            <div className='flex px-sm'>
                                {movie.torrents?.map((link, key) => (<a href={link.url} target="_blank" key={link.url}>
                                    <div className='pr-sm'>{link.quality}</div>
                                </a>))}
                            </div>
                        </h3>
                        <div className="ratings">
                            <h3 className='flex'><a href={`https://www.imdb.com/title/${movie.imdb_code}`} target='_blank'><img src={imdbLogo} alt='imdbLogo'
                                                                 className='pr-md'/></a> {parseFloat(movie.rating).toFixed(1)}</h3>
                        </div>
                    </div>
                </div>
                <div className="similar-movies">
                    <span className='text-light'>Similar Movies</span>
                </div>
            </div>
            <div className="lower-half flex py-lg justify-evenly">
                <div className="synopsis" style={{width: '60%'}}
                >
                    <h1 className='block'>Synopsis</h1>
                    <p style={{whiteSpace: 'wrap', textAlign: 'justify'}}>{movie.description_full}</p>
                </div>
                <div className="persons-in-movie">
                    <div className="director">
                        Director:
                        <div className="direct flex pa-md">
                            <a href={`https://www.themoviedb.org/person/${directorId}`}
                            target='_blank'>
                                {/*<img className='director-image' src={`https://image.tmdb.org/t/p/original/${directorPic}`}*/}
                                {/*     alt={`${director}_photo`}*/}
                                {/*/>*/}
                                <ReactImageFallback
                                    className='director-image'
                                    src={`https://image.tmdb.org/t/p/original/${directorPic}`}
                                    fallbackImage={defaultIcon}
                                />
                            </a>
                            <p className='pa-md mt-md'>{director}</p>
                        </div>
                    </div>
                    {/* {console.log(movie.cast)} */}
                    <div className="cast">
                        Cast:
                        {movie.cast?.map((actor, i) => (

                            <a className="flex pa-md"
                               href={`https://www.imdb.com/name/nm${actor.imdb_code}`}
                               target="_blank"
                               key={actor.imdb_code}
                            >
                                {/*<img className='cast-image' src={actor.url_small_image}*/}
                                {/*     // alt={`${actor.name}_photo`}*/}
                                {/*     onError={(event) => {*/}
                                {/*         event.target.src = defaultIcon*/}
                                {/*     }}*/}
                                {/*     style={{borderRadius: '100%'}}/>*/}
                                <ReactImageFallback
                                    className='cast-image'
                                    src={actor.url_small_image}
                                    fallbackImage={defaultIcon}
                                />
                                <p className='pa-md'>{actor.name} as {actor.character_name} </p>
                            </a>


                        ))}
                    </div>
                </div>

            </div>
            <div className="trailer pa-md" style={{width: '60%', borderRadius: '50%'}}>
                <YoutubeTrailerEmbed trailerCode={movie.yt_trailer_code}/>
            </div>
        </section>
    )
}