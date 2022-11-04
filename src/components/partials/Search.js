import {useParams} from "react-router"
import CreatableSelect from "react-select/creatable";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {TextField, ThemeProvider} from "@mui/material";
import {theme} from "../../utils/Mui-Colors";
import {getSearchResults} from "../../utils/getSearchResults";
import {useEffect, useState} from "react";

import {getSearchRedux} from '../../store/movieSlice'
import {Link} from "react-router-dom";
import {customImageFallback} from "../../utils/customImageFallback";

//const movie
export const Search = () => {
    const dispatch = useDispatch()
    const {keyword} = useParams();
    const [searchString, setSearchString] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const searchMovies = useSelector(state => state.movie.searchMovies);
    console.log(searchMovies)
    // slice(0,5);
    // console.log(topSearchResults)
    // const movieList = searchMovies?.map((mov, key) => mov.title)
    // console.log(movieList)

    const handleKeyDown = (e) => {
        const {key} = e;
        let nextIndexCount = 0;

        if (key === 'ArrowDown') {
            nextIndexCount = (focusedIndex + 1) % searchMovies?.length;
            console.log(searchMovies[nextIndexCount])
        }
        if (key === 'ArrowUp') {
            nextIndexCount = (focusedIndex + searchMovies?.length - 1) % searchMovies?.length;
            console.log(searchMovies[nextIndexCount])

        }
        if (key === 'Escape') {
            setShowResults(false)
            console.log(showResults)
        }
        if (key === 'Enter') {
            e.preventDefault();

        }

    }

    useEffect(() => {
        dispatch(getSearchRedux(searchString))
    }, [searchString]);

    useEffect(() => {
        if (searchString.length > 0 && !showResults) setShowResults(true);
        if (searchString.length <= 0) setShowResults(false);
    }, [searchString]);


    //console.log('movie in search', movieList)
    // console.log(searchMovies)
    return (<div
        // className='fixed'
        className='search-container py-xs px-md'
    >
        <div
            className="search"
            onKeyDown={handleKeyDown}
            // className="w-[275px] px-2 py-sm rounded-full"
        >

            <div className="flex">
                <SearchIcon fontSize="small"/>

                <input
                    type="text"
                    onChange={(event) => setSearchString(event.target.value)}
                    className='search-input px-md'
                    // className='w-[200px] px-5 py-1 text-lg rounded-full border-2
                    //  border-gray-500 focus:border-gray-700 outline-none transition'
                    placeholder='Quick search'
                />
            </div>
            {showResults && (<div
                className=' float mt-md'
                style={{border: '1px solid #fff'}}
                // className="absolute mt-1 w-full p-2 bg-white shadow-lg
                //  rounded-bl rounded-br max-h-56 overflow-y-auto"
            >
                {searchMovies?.map((item, index) => (
                    <Link onClick={() => console.log(item.slug)}
                          to={`yts-movie-app/${item.slug}`}
                          state={{
                              currentMovieId: item.id
                          }}
                          key={item.id}>
                        <div className='search-item flex movie-lower pa-md'
                            // className="cursor-pointer hover:bg-gray-300 p-2"
                        >

                            <div className='movie-cover '>
                                <img
                                    className='content-image'
                                    src={item.small_cover_image}
                                    onError={(e) => customImageFallback(e, item.TMDB_poster, 'movie-poster')}
                                />
                                {/*<img src={item.small_cover_image} alt={`${item.title}_cover_image`}/>*/}
                            </div>
                            <div className='movie-text px-md'>
                                <div className='pb-md'>{item.title}</div>
                                <div>{item.year}</div>
                            </div>

                        </div>
                    </Link>
                ))
                }
            </div>)}
        </div>
    </div>)
}