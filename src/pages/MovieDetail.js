import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router"
import {getMovie} from "../utils/getMovies";
import imdbLogo from '../assets/svg/logo-imdb.svg';
import YoutubeTrailerEmbed from "../components/partials/YoutubeTrailerEmbed";
import defaultIcon from "../assets/default_avatar.webp";
import ReactImageFallback from "react-image-fallback";
import {PopUpModal} from "../components/partials/PopUpModal";
import {CastDetails} from "../components/partials/CastDetails";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import moment from "moment";
import {theme} from "../utils/Mui-Colors";
import StarIcon from "@mui/icons-material/Star";
import {ThemeProvider} from "@mui/material";
import {torrentType} from "../utils/torrentType";
import {customImageFallback} from "../utils/customImageFallback";
import {SimilarMovies} from "../components/partials/SimilarMovies";
import {getSimilarMovies} from "../utils/getSimilarMovies";


export const MovieDetail = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const movie = useSelector(state => state.movie.movie);
    const suggestedMovies = useSelector(state => state.movie.similarMovies);
    const id = location.state?.currentMovieId;

    const [open, setOpen] = useState(false);


    console.log(id)

    // console.log(moment(Date.parse(movie.date_uploaded)))
    // MOMENT JS TIME FORMAT
    // const time = moment(movie.date_uploaded).format('MMMM DD, YYYY, h:mm A')


    useEffect(async () => {
        await loadMovie();
    }, [id])
    const loadMovie = async () => {
        await dispatch(getMovie(id));
        await dispatch(getSimilarMovies(id));
    }

    return (
        <section className='detail-section'>
            <div className="top-half flex justify-evenly movie-bg" style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${movie.background_image_original})`
            }}>
                <div className="movie-in-detail flex pa-md ">
                    <div className="left-half">
                        <div className="poster-medium pr-lg ">
                            {/*<img className='movie-poster' src={movie.medium_cover_image}*/}
                            {/*     alt={`${movie.title}-movie-poster`}/>*/}
                            <img
                                className='movie-poster movie-detail-poster '
                                src={movie.medium_cover_image}
                                onError={(e) => customImageFallback(e, movie.TMDB_poster,'movie-error-poster')}
                                // fallbackImage={`https://image.tmdb.org/t/p/original/${movie.TMDB_poster}`}
                            />
                        </div>
                        <div className="text-light text-center yts-font">
                            <div className='dload-button bg-yts-green py-sm my-md mr-lg flex justify-center'
                                 onClick={() => setOpen(true)}>
                                <ThemeProvider theme={theme}>
                                    <SystemUpdateAltIcon color='grey'/>
                                </ThemeProvider>

                                <span className='px-sm bold'>Download</span>
                            </div>
                            {open && <PopUpModal setOpen={setOpen} torrents={movie.torrents}/>}
                        </div>
                    </div>
                    <div className="details movie-title yts-font pl-four-xl">
                        <h3 className='fs-xl movie-title-font pb-lg'>{movie.title || ''}</h3>
                        <h3 className='movie-year bold'>
                            {movie.year}
                            <span className='lang-text fs-md pl-xs'>{`[${movie?.language?.toUpperCase()}]`}</span>
                        </h3>
                        {/* index if not 0, insert '/' before the element in the array */}
                        <h3 className='bold'>{movie.genres?.map((film, i) => (i ? '/ ' : '') + film)}</h3>

                        {/* use conditional statement to not give '/' to last element in the genre array */}

                        <h3 className='flex py-lg'><span className='font-italic pt-xs'>Available in:</span>
                            <div className='torrent-options-grid px-sm'>
                                {movie.torrents?.map((link) => (<a href={link.url} target="_blank" key={link.url}>
                                    <div className='torrent-link pr-sm mx-xs'>
                                        {`${link.quality}.${torrentType(link.type)}`}
                                    </div>
                                </a>))}
                            </div>
                        </h3>
                        <div className="ratings">
                            <h3 className='flex'>
                                <a href={`https://www.imdb.com/title/${movie.imdb_code}`} target='_blank'>
                                    <img src={imdbLogo} alt='imdbLogo'
                                         className='pr-md'/>
                                </a>
                                <span className='bold'> {parseFloat(movie.rating).toFixed(1)}</span>
                            </h3>
                        </div>
                    </div>

                </div>
                <div className="similar-movies-all pa-lg">
                    <span className='text-light bold ml-sm'>Similar Movies</span>
                    <SimilarMovies suggestedMovies={suggestedMovies}/>
                </div>
            </div>


            <div className='movie-lower text-light'>
                {/*<YoutubeTrailerEmbed trailerCode={movie.yt_trailer_code}/>*/}

                <div className="lower-half flex py-lg justify-around">
                    <div className="synopsis" style={{width: '50%'}}>
                        <h3 className='plot block pb-xl'>Plot Summary</h3>
                        <p className='yts-grey'
                           style={{whiteSpace: 'wrap', textAlign: 'justify'}}>
                            {movie.description_full !== ''
                                ? movie.description_full
                                : movie.TMDB_plot}
                        </p>
                        <p className='font-italic yts-grey mt-xl'>Uploaded by: <span>FREEMAN</span></p>
                        <p className=' yts-grey font-italic'>{moment(movie.date_uploaded).format('MMMM DD, YYYY [at] h:mm A')} </p>
                    </div>
                    <CastDetails movie={movie}/>
                </div>

            </div>

        </section>
    )
}