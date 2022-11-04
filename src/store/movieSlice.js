import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {APIGetSearchDetails} from "../api/movie";

// import thunk from "redux-thunk";

const initialState = {
    movies: [],
    movie: {},
    favMovies: [],
    similarMovies:[],
    searchMovies:[],
};

export const getSearchRedux = createAsyncThunk(
    'XXX',
    async (name,thunkAPI) => {
        if (name !== ''){
            const res = await APIGetSearchDetails(name);
            const movies = res?.data?.data?.movies
            return movies?.sort((a, b) => b.rating - a.rating).slice(0,5)
        }
    })


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
        setSimilarMovies: (state, action) => {
            return {...state, similarMovies: action.payload};
        },
    },
    extraReducers: {
        [getSearchRedux.fulfilled]: (state, action) => {
            return {...state, searchMovies: action.payload}
        },

    },
});

export const {setAllMovies, setSingleMovie, setFavMovies,setSimilarMovies} = movieSlice.actions;

export default movieSlice.reducer;

