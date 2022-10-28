import {Routes, Route} from "react-router-dom";
import {ROUTES} from "../routes/routes";
import {AllMovieDisplay}from '../components/partials/AllMovieDisplay';
import {Search} from "../pages/Search";
import {FavMovies} from "../pages/FavMovies";
import {Home} from "../pages/Home";
import {MovieDetail} from "../pages/MovieDetail";

export const AppRoutes = () => (

    <Routes>
        {ROUTES.map((route, key) => (
            <Route path={route.path} element={route.element} key={key}/>
        ))}
    </Routes>

)