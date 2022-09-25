import {useParams} from "react-router"
import CreatableSelect from "react-select/creatable";
import {useSelector} from "react-redux";


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
        <section>
            {/*<input type="text" placeholder="Search" className='text-white'/>*/}
            <CreatableSelect options={movieList
                // movies.map((mov,key)=>mov.title)
            }/>
            <h1>{keyword}</h1>
            {/*{console.log(aquaticCreatures)}*/}
        </section>
    )
}