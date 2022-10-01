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


export const MovieDetail = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const movie = useSelector(state => state.movie.movie);
    const id = location.state?.currentMovieId;
    const [open, setOpen] = useState(false);
    //const director = location.state?.director;
    // const directorPic = location.state?.directorPic;
    // const directorId = location.state?.directorId;
    //console.log(movie.genres)
    //console.log(directorId)

    // console.log(moment(Date.parse(movie.date_uploaded)))

    const time = moment(movie.date_uploaded).format('MMMM DD, YYYY, h:mm A')
    console.log(time)
    useEffect(async () => {

        await loadMovie();
    }, [])
    const loadMovie = async () => {
        await dispatch(getMovie(id));
    }
    return (
        <section className='detail-section'>
            <div className="top-half flex justify-between movie-bg" style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${movie.background_image_original})`
            }}>
                <div className="movie-in-detail flex pa-md ">
                    <div className="left-half">
                        <div className="poster-medium pr-lg ">
                            {/*<img className='movie-poster' src={movie.medium_cover_image}*/}
                            {/*     alt={`${movie.title}-movie-poster`}/>*/}
                            <ReactImageFallback
                                className='movie-detail-poster'
                                src={movie.medium_cover_image}
                                fallbackImage={`https://image.tmdb.org/t/p/original/${movie.TMDB_poster}`}
                            />
                        </div>
                        <div className="text-light text-center yts-font">
                            <div className='dload-button bg-yts-green py-sm my-md mr-lg flex justify-center' onClick={() => setOpen(true)}>
                                <SystemUpdateAltIcon/>
                                <span className='px-sm bold'>Download</span>
                            </div>
                            {open && <PopUpModal setOpen={setOpen} torrents={movie.torrents}/>}
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
                                {movie.torrents?.map((link) => (<a href={link.url} target="_blank" key={link.url}>
                                    <div className='pr-sm'>{link.quality}</div>
                                </a>))}
                            </div>
                        </h3>
                        <div className="ratings">
                            <h3 className='flex'>
                                <a href={`https://www.imdb.com/title/${movie.imdb_code}`} target='_blank'>
                                    <img src={imdbLogo} alt='imdbLogo'
                                         className='pr-md'/>
                                </a>
                                {parseFloat(movie.rating).toFixed(1)}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="similar-movies">
                    {/*<span className='text-light'>Similar Movies</span>*/}
                </div>
            </div>



            <div className='movie-lower text-light'>
                <YoutubeTrailerEmbed trailerCode={movie.yt_trailer_code}/>

                <div className="lower-half  flex py-lg justify-evenly">
                    <div className="synopsis" style={{width: '60%'}}>
                        <h3 className=' plot block'>Plot Summary</h3>
                        <p  className='yts-grey' style={{whiteSpace: 'wrap', textAlign: 'justify'}}>{movie.description_full}</p>
                        <p className='font-italic yts-grey mt-xl'>Uploaded by: <span>FREEMAN</span></p>
                        <p className=' yts-grey font-italic'>{moment(movie.date_uploaded).format('MMMM DD, YYYY [at] h:mm A')} </p>
                    </div>
                    <CastDetails movie={movie}/>
                </div>

            </div>

        </section>
    )
}