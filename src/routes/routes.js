import {AllMovieDisplay} from "../components/partials/AllMovieDisplay";
import {MovieDetail} from "../pages/MovieDetail";
import {Search} from "../pages/Search";
import {FavMovies} from "../pages/FavMovies";
import {Home} from "../pages/Home";
import {BrowseMovies} from "../pages/BrowseMovies";

export const ROUTES = [
    {path: '/', element: <Home/>},
    {path: '/browse', element: <BrowseMovies/>},
    {path: '/fav-movies', element: <FavMovies/>},
    {path: '/fav-movies/:slug', element: <MovieDetail/>},
    {path: '/:slug', element: <MovieDetail/>},
    {path: '/search/:keyword', element: <Search/>},
]