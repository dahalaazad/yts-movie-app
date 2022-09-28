import {useEffect} from "react";
import {getMovies} from "./getMovies";
import {
    APIGetAllMovies,
    APIGetFavMovies,
    APIGetFurtherOMDBDetails,
    APIGetFurtherTMDBDetails,
    APIGetTMDBCastDetails
} from "../api/movie";
import {setAllMovies, setFavMovies} from "../store/movieSlice";
import {logDOM} from "@testing-library/react";

export const greatMovies = [
    {label: 'Batman Begins', imdbCode: 'tt0372784'},
    {label: 'The Dark Knight', imdbCode: 'tt0468569'},
    {label: 'The Dark Knight Rises', imdbCode: 'tt1345836'},
    {label: 'Forrest Gump', imdbCode: 'tt0109830'},
    {label: 'Cast Away', imdbCode: 'tt0162222'},
    {label: 'Iron Man', imdbCode: 'tt0371746'},
    {label: 'Top Gun: Maverick', imdbCode: 'tt1745960'},
    {label: 'Andhadhun', imdbCode: 'tt8108198'},
    {label: 'The Usual Suspects', imdbCode: 'tt0114814'},
    {label: 'Schindler\'s List', imdbCode: 'tt0108052'},
    {label: 'Fight Club', imdbCode: 'tt0137523'},
    {label: 'Inception', imdbCode: 'tt1375666'},
    {label: 'Goodfellas', imdbCode: 'tt0099685'},
    {label: '3 Idiots', imdbCode: 'tt1187043'},
    {label: 'Heat', imdbCode: 'tt0113277'},
    {label: 'The Wolf of Wall Street', imdbCode: 'tt0993846'},
    {label: 'The Truman Show', imdbCode: 'tt0120382'},
    {label: 'Up', imdbCode: 'tt1049413'},
    {label: 'Good Will Hunting', imdbCode: 'tt0119217'},
    {label: 'The Godfather', imdbCode: 'tt0068646'},
    {label: 'The Godfather Part II', imdbCode: 'tt0071562'},
    {label: 'Interstellar', imdbCode: 'tt0816692'},
    {label: 'Apocalypse Now', imdbCode: 'tt0078788'},
    {label: 'WALL·E', imdbCode: 'tt0910970'},
];


export const getFavMovies = () => async dispatch => {
    const response = await Promise.all(greatMovies.map(item => APIGetFavMovies(item.imdbCode)))
    const movieList = response.map(item => item?.data?.data?.movie)

    await Promise.all(movieList.map(item => APIGetFurtherTMDBDetails(item.imdb_code))).then(
        res => {
            //console.log(res)
            const tmdbList = res.map(mov => mov.data.movie_results[0]);
            //console.log(tmdbList.map(item=> item))
            const list = Promise.all(tmdbList.map(a => APIGetTMDBCastDetails(a.id))).then(
                res1 => {
                    //console.log(res1)
                    const crewList = res1.map(b => (b.data.crew).filter(c=>c.job==='Director'));

                    crewList.map((d,index) => {
                        //console.log(d[0])
                        movieList[index].director = d[0].name;
                        movieList[index].directorPic = d[0].profile_path;
                        movieList[index].directorId = d[0].id
                    })
                    //console.log(movieList)
                    dispatch(setFavMovies(movieList))

                }
            )

        }
    )


    // await Promise.all(movieList.map(item => APIGetFurtherOMDBDetails(item.imdb_code))).then(
    //     res => {
    //         //console.log(res)
    //         res.map((x, index) => {
    //             console.log(x.data)
    //             movieList[index].director = x.data.Director
    //             //console.log(movieList[index].title,'---->',x.data.Title)
    //         })
    //
    //         //console.log(movieList)
    //         dispatch(setFavMovies(movieList))
    //     }
    // )

}

// export const getDirectorName = (movies) => async dispatch => {
//     console.log(movies)
//
//     // await  Promise.all(movies.map(item => APIGetFurtherDetails(item.imdb_code))).then(
//     //     res => {
//     //         console.log(res)
//     //     }
//     // )
// }

