import {GetFurtherRequestOMDB, GetFurtherRequestTMDB, GetRequest, GetTMDBCastDetails} from "../plugins/https"

// const OMDB_API_KEY = 'e83533b8';
const TMDB_API_KEY = '6bfc07f764b6aef7f7051c8a0f3adc7c'


export const APIGetAllMovies = () => {
    return GetRequest(`list_movies.json`);
}
export const APIBrowseMovies = (page) => {
    return GetRequest(`list_movies.json?page=${page}`);
}

export const APIGetMovie = (id) => {
    return GetRequest(`movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
}
export const APIGetSimilarMovies = (id) => {
    return GetRequest(`movie_suggestions.json?movie_id=${id}`);
}

export const APIGetFavMovies = (id) => {
    return GetRequest(`movie_details.json?imdb_id=${id}`);
}

// export const APIGetFurtherOMDBDetails = (id) => {
//     return GetFurtherRequestOMDB(`?apikey=${OMDB_API_KEY}&i=${id}`);
// }
export const APIGetFurtherTMDBDetails = (id) => {
    return GetFurtherRequestTMDB(`${id}?api_key=${TMDB_API_KEY}&language=en-US&external_source=imdb_id`);
}

export const APIGetTMDBCastDetails = (id) => {
    return GetTMDBCastDetails(`${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`);
}
export const APIGetSearchDetails = (name) => {
    return GetRequest(`list_movies.json?query_term=${name.toLowerCase()}`);
}



