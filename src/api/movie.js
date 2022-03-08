import { GetRequest } from "../plugins/https"

export const APIGetAllMovies =()=>{
    return GetRequest('list_movies.json');
}

export const APIGetMovie=(id)=>{
    return GetRequest("movie_details.json?movie_id="+id);
}