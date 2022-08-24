import { Home } from "../screens/Home";
import { MovieDetail } from "../screens/MovieDetail";
import { Search } from "../screens/Search";
export const ROUTES = [
    {path:'', element: <Home/>, exact:true},
    {path:'/movies/:slug', element: <MovieDetail/>, exact:true},
    {path:'/search/:keyword', element: <Search/>, exact:true},
]