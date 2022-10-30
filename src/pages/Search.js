import {useParams} from "react-router"
import CreatableSelect from "react-select/creatable";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {TextField, ThemeProvider} from "@mui/material";
import {theme} from "../utils/Mui-Colors";
import {getSearchResults} from "../utils/getSearchResults";
import {useEffect} from "react";

import {getSearchRedux} from '../store/movieSlice'

//const movie
const aquaticCreatures = [
    {label: 'Shark', value: 'Shark'},
    {label: 'Dolphin', value: 'Dolphin'},
    {label: 'Whale', value: 'Whale'},
    {label: 'Octopus', value: 'Octopus'},
    {label: 'Crab', value: 'Crab'},
    {label: 'Lobster', value: 'Lobster'},
];
export const Search = () => {
    const dispatch = useDispatch()
    const {keyword} = useParams();
    const movies = useSelector(state => state.movie.movies);

    const movieList = movies.map((mov, key) => {
        return {
            value: mov.title,
            label: mov.title
        }
    })

    useEffect(() => {
        dispatch(getSearchRedux())
    }, []);

    //console.log('movie in search', movieList)
    // console.log(getSearchResults('The'))
    return (
        <div className='search-container'>
            <div className="search flex w-[275px] px-2 py-sm rounded-full">

                    <SearchIcon fontSize="small" />

                <input
                    type="text"
                    onChange={(event) => {
                        console.log(event.target.value)
                    }}
                    className='search-input px-md'
                    placeholder='Quick search'
                />
            </div>
        </div>
    )
}