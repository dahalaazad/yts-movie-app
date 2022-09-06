import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router"
import {getMovie} from "../utils/getMovies";
import imdbLogo from '../assets/svg/logo-imdb.svg';
import YoutubeTrailerEmbed from "../components/partials/YoutubeTrailerEmbed";


export const MovieDetail = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const movie = useSelector(state => state.movie.movie);
    const id = location.state?.currentMovieId;
    console.log('movieName--->', movie.title, movie.director)
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
            <div className="movie-in-detail flex card pa-md">
                <div className="poster-medium pr-lg">
                    <img src={movie.medium_cover_image} alt=""/>
                </div>
                <div className="details">
                    <h3>{movie.title || ''}</h3>
                    <h3>{movie.year} {`[${movie.language?.toUpperCase()}]`}</h3>
                    {/* index if not 0, insert '/' before the element in the array */}
                    <h3>{movie.genres?.map((film, i) => (i ? '/ ' : '') + film)}</h3>

                    {/* use conditional statement to not give '/' to last element in the genre array */}

                    <h3 className='flex'>Available in:
                        <div className='flex px-sm'>
                            {movie.torrents?.map((link,key) => (<a href={link.url} target="_blank" key={link.url}>
                                <div className='pr-sm'>{link.quality}</div>
                            </a>))}
                        </div>
                    </h3>
                    <div className="ratings">
                        <h3 className='flex'><img src={imdbLogo} alt='imdbLogo' className='pr-md'/> {movie.rating}</h3>
                    </div>
                </div>
            </div>
            <div className="lower-half flex py-lg justify-evenly">
                <div className="synopsis" style={{width:'60%'}}
                >
                    <h1 className='block'>Synopsis</h1>
                    <p className style={{whiteSpace:'wrap',textAlign:'justify'}}>{movie.description_full}</p>
                </div>
                <div className="persons-in-movie">
                    <div className="director">
                        Director:
                    </div>
                    {/* {console.log(movie.cast)} */}
                    <div className="cast">
                        Cast:
                        {movie.cast?.map((actor, i) => (
                            <div className="flex pa-md" key={actor.imdb_code}>
                                <img src={actor.url_small_image} alt={`${actor.name}_photo`} style={{borderRadius:'100%'}}/>
                                <p className='pa-md'>{actor.name} as {actor.character_name} </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="trailer pa-md" style={{width:'60%',borderRadius:'50%'}}>
                <YoutubeTrailerEmbed trailerCode={movie.yt_trailer_code} />
            </div>
        </section>
    )
}