import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {getMovies} from "../utils/getMovies";
import ReactImageFallback from "react-image-fallback";
import {YtsPagination} from "../components/YtsPagination";
import StarIcon from '@mui/icons-material/Star';
import {ThemeProvider} from "@mui/material";
import {theme} from "../utils/Mui-Colors";

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
                                    className='content-image movie-poster'
                                    src={mov.medium_cover_image}
                                    fallbackImage={`https://image.tmdb.org/t/p/original${mov.TMDB_poster}`}
                                />
                                <div className="content-overlay"></div>
                                <div className="content-details fadeIn-bottom fs-xl">
                                    <ThemeProvider theme={theme}>
                                        <StarIcon color='green' fontSize="large"/>
                                    </ThemeProvider>
                                    <h3 className="content-title fw-700 fs-lg">
                                        <span className='px-xs fw-700'>{mov.rating}</span>
                                        <span className='fw-700'>/</span>
                                        <span className='px-xs fw-700'>10</span>
                                    </h3>
                                    <p className="content-text fs-md">{mov?.genres?.slice(0,2).map(item => (
                                        <span className='text-light block bold'>{item}</span>))}</p>
                                    <button className='view-details-btn bg-yts-active text-light py-sm px-lg fs-md-1'>View Details</button>
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
                                    {mov.title.length > 21 ? mov.title.substring(0, 21) + '...' : mov.title}
                                </div>

                            </div>
                            <div className="movie-year yts-grey">{mov.year}</div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}