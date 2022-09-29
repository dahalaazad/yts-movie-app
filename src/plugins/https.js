import {movieAxios, movieOMDBAxios, movieTMDBAxios, movieTMDBCastDetailsAxios} from "./axios"


export const GetRequest = (url, config) => {
    return movieAxios.get(url, config);
}
// export const GetFurtherRequestOMDB = (url, config) => {
//     // console.log(url)
//     return movieOMDBAxios.get(url, config);
// }

export const GetFurtherRequestTMDB = (url, config) => {
    // console.log(url)
    return movieTMDBAxios.get(url, config);
}

export const GetTMDBCastDetails = (url, config) => {
    // console.log(url)
    return movieTMDBCastDetailsAxios.get(url, config);
}



export const PostRequest = (url, data, config) => {
    return movieAxios.post(url, data, config);
}