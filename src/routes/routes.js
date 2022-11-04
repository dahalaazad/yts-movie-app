import {AllMovieDisplay} from "../components/partials/AllMovieDisplay";
import {MovieDetail} from "../pages/MovieDetail";
import {Search} from "../components/partials/Search";
import {FavMovies} from "../pages/FavMovies";
import {Home} from "../pages/Home";
import {BrowseMovies} from "../pages/BrowseMovies";

export const ROUTES = [
    {path: '/yts-movie-app', element: <Home/>},
    {path: '/yts-movie-app/browse', element: <BrowseMovies/>},
    {path: '/yts-movie-app/fav-movies', element: <FavMovies/>},
    {path: '/yts-movie-app/fav-movies/:slug', element: <MovieDetail/>},
    {path: '/yts-movie-app/:slug', element: <MovieDetail/>},
    {path: '/yts-movie-app/browse/:slug', element: <MovieDetail/>},
    // {path: '/yts-movie-app/search/:keyword', element: <Search/>},
]