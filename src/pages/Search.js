import {useParams} from "react-router"
import CreatableSelect from "react-select/creatable";
import {useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {TextField, ThemeProvider} from "@mui/material";
import {theme} from "../utils/Mui-Colors";


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
    const {keyword} = useParams();
    const movies = useSelector(state => state.movie.movies);

    const movieList = movies.map((mov, key) => {
        return {
            value: mov.title,
            label: mov.title
        }
    })
    //console.log('movie in search', movieList)
    return (
        <div className='search-container'>
            <div className="search flex w-[275px] px-2 py-sm rounded-full">

                    <SearchIcon fontSize="small" />

                <input
                    type="text"
                    // onChange={onChange}
                    className='search-input px-md'
                    placeholder='Quick search'
                />
            </div>
        </div>
    )
}