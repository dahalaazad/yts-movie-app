import {useParams} from "react-router"
import CreatableSelect from "react-select/creatable";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {TextField, ThemeProvider} from "@mui/material";
import {theme} from "../utils/Mui-Colors";
import {getSearchResults} from "../utils/getSearchResults";
import {useEffect, useState} from "react";

import {getSearchRedux} from '../store/movieSlice'

//const movie
const aquaticCreatures = [{label: 'Shark', value: 'Shark'}, {label: 'Dolphin', value: 'Dolphin'}, {
    label: 'Whale',
    value: 'Whale'
}, {label: 'Octopus', value: 'Octopus'}, {label: 'Crab', value: 'Crab'}, {label: 'Lobster', value: 'Lobster'},];
export const Search = () => {
    const dispatch = useDispatch()
    const {keyword} = useParams();
    const [searchString, setSearchString] = useState('');
    const searchMovies = useSelector(state => state.movie.searchMovies);
    console.log(searchMovies)
    // slice(0,5);
    // console.log(topSearchResults)
    // const movieList = searchMovies?.map((mov, key) => mov.title)
    // console.log(movieList)

    useEffect(() => {
        dispatch(getSearchRedux(searchString))
    }, [searchString]);

    //console.log('movie in search', movieList)
    // console.log(searchMovies)
    return (<div
        // className='fixed'
        className='search-container py-xs px-md'
    >
        <div
            className="search"
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
            <div
                className='float mt-md'
                style={{border: '1px solid #fff'}}
                // className="absolute mt-1 w-full p-2 bg-white shadow-lg
                //  rounded-bl rounded-br max-h-56 overflow-y-auto"
            >
                {searchMovies?.map((item, index) => (
                    <div className='flex movie-lower pa-md'
                        // className="cursor-pointer hover:bg-gray-300 p-2"
                    >

                        <div className='movie-cover'>
                            <img src={item.small_cover_image} alt={`${item.title}_cover_image`}/>
                        </div>
                        <div className='movie-text px-md'>
                            <div className='pb-md'>{item.title}</div>
                            <div>{item.year}</div>
                        </div>

                    </div>))}
            </div>
        </div>
    </div>)
}