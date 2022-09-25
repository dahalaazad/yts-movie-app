import { GetRequest } from "../plugins/https"

export const APIGetAllMovies =()=>{
    return GetRequest('list_movies.json');
}

export const APIGetMovie=(id)=>{
    return GetRequest(`movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
}

export const APIGetFavMovies =(id)=>{
    return GetRequest(`movie_details.json?imdb_id=${id}`);
}