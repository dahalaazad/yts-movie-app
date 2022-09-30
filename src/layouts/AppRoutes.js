import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import {AllMovieDisplay} from '../pages/AllMovieDisplay';
import { Search } from "../pages/Search";
import {FavMovies} from "../pages/FavMovies";
import {Home} from "../pages/Home";

export const AppRoutes = ()=>(
    <Routes>
            <Route path={'/'} element={<Home/>} exact={true}/>
        {ROUTES.map((route,key)=>(
             <Route path={route.path} element={route.element} exact={route.exact} key={key}/>
        ))}
    </Routes>
)