import movieAxios from "./axios"

export const GetRequest=(url,config)=>{
    return movieAxios.get(url,config);
}

export const PostRequest=(url,data,config)=>{
    return movieAxios.post(url,data,config);
}