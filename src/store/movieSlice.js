import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: {}
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
    }
});

export const {setAllMovies, setSingleMovie} = movieSlice.actions;

export default movieSlice.reducer;