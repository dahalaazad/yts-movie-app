import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: {},
    favMovies:[],
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setAllMovies: (state, action) => {
            return {...state, movies: action.payload};
        },
        setSingleMovie: (state, action) => {
            return {...state, movie: action.payload};
        },
        setFavMovies: (state, action) => {
            return {...state, favMovies: action.payload};
        },
    }
});

export const {setAllMovies, setSingleMovie,setFavMovies} = movieSlice.actions;

export default movieSlice.reducer;