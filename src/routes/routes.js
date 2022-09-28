import { AllMovieDisplay } from "../pages/AllMovieDisplay";
import { MovieDetail } from "../pages/MovieDetail";
import { Search } from "../pages/Search";
import {FavMovies} from "../pages/FavMovies";
import {Home} from "../pages/Home";
export const ROUTES = [
    {path:'', element: <FavMovies/>, exact:true},
    {path:'/movies', element: <Home/>, exact:true},
    {path:'/movies/:slug', element: <MovieDetail/>, exact:true},
    {path:'/search/:keyword', element: <Search/>, exact:true},
]