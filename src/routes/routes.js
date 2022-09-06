import { Home } from "../pages/Home";
import { MovieDetail } from "../pages/MovieDetail";
import { Search } from "../pages/Search";
export const ROUTES = [
    {path:'', element: <Home/>, exact:true},
    {path:'/movies/:slug', element: <MovieDetail/>, exact:true},
    {path:'/search/:keyword', element: <Search/>, exact:true},
]