import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {getMovies} from "../utils/getMovies";
import ReactImageFallback from "react-image-fallback";
import {YtsPagination} from "../components/YtsPagination";

export const AllMovieDisplay = ({moviesProp}) => {
    const movies = useSelector(state => state.movie.movies);
    //console.log(moviesProp)
    return (
        <section className='home-bg yts-font'>

            <div className="flex wrap justify-center all-movie">
                {moviesProp.map((mov, key) => (


                    <div className="container pa-xl mb-four-xl">

                        <div className="content mx-lg movie-poster-border">
                            <Link to={`/movies/${mov.slug}`}
                                  state={{
                                      currentMovieId: mov.id
                                  }}>

                                <ReactImageFallback
                                    className='content-image'
                                    src={mov.medium_cover_image}
                                    fallbackImage={`https://image.tmdb.org/t/p/original${mov.TMDB_poster}`}
                                />
                                <div className="content-overlay"></div>
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">{mov.rating}</h3>
                                    <p className="content-text">{mov?.genres?.map(item => (
                                        <span className='text-light block bold'>{item}</span>))}</p>
                                    <button className='bg-yts-active text-light'>View Details</button>
                                </div>
                            </Link>
                        </div>

                        <div className="title-year yts-font text-light">
                            <div className="movie-title flex bold">
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
                            <div className="movie-year yts-grey">{mov.year}</div>
                        </div>

                    </div>

                    // <div className="card ma-md movie-card" key={key}>
                    //     <Link to={`/movies/${mov.slug}`}
                    //           state={{
                    //               currentMovieId: mov.id,
                    //               director: mov.director,
                    //               directorPic: mov.directorPic,
                    //               directorId: mov.directorId
                    //           }}>
                    //         <div className="movie-poster">
                    //             {/*<img src={mov.medium_cover_image} alt=""/>*/}
                    //             <ReactImageFallback
                    //                 className='movie-poster-overlay'
                    //                 src={mov.medium_cover_image}
                    //                 fallbackImage={`https://image.tmdb.org/t/p/original${mov.TMDB_poster}`}
                    //             />
                    //             <div className="one">
                    //                 <span>Comedy</span>
                    //             </div>
                    //
                    //         </div>
                    //         <div className="movie-details flex">
                    //             {mov.language !== 'en' ?
                    //                 <div className="movie-language pr-xs">
                    //                     [{mov.language.toUpperCase()}]
                    //                 </div>
                    //                 : null
                    //             }
                    //             <div className="">
                    //                 {mov.title.length > 27 ? mov.title.substring(0, 27) + '...' : mov.title}
                    //             </div>
                    //         </div>
                    //
                    //     </Link>
                    //     <div className="movie-year">
                    //         {mov.year}
                    //     </div>
                    // </div>
                ))}
            </div>
        </section>
    )
}