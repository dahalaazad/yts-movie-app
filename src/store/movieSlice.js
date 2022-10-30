import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {APIGetSearchDetails} from "../api/movie";

// import thunk from "redux-thunk";

const initialState = {
    movies: [],
    movie: {},
    favMovies: [],
    searchMovies:[],
    loading:false,

};

export const getSearchRedux = createAsyncThunk(
    'getSearchRedux',
    async (thunkAPI) => {
        const res = await APIGetSearchDetails('The');
        return res?.data?.data
        console.log(res)
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
        //     setSearchMovies: (state, action) => {
        //         return {...state, searchMovies: action.payload};
        //     },
    },
    extraReducers: {
        [getSearchRedux.fulfilled]: (state, action) => {
            return {...state, searchMovies: action.payload}
        },

    },
});

export const {setAllMovies, setSingleMovie, setFavMovies} = movieSlice.actions;

export default movieSlice.reducer;

