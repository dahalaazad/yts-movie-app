// import { SET_MOVIES,SET_MOVIE } from "./actionTypes";
//
// const initialState = {
//     movies:[],
//     movie:{}
// }
//
// export const movieReducer = (state=initialState, action)=>{
//     switch(action.type){
//         case SET_MOVIES:
//             return{
//                 ...state,
//                 movies: action.payload
//             }
//         case SET_MOVIE:
//                 return{
//                     ...state,
//                     movie: action.payload
//                 }
//         default:
//             return state;
//     }
// }