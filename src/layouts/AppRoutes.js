import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import {Home} from '../pages/Home';
import { Search } from "../pages/Search";

export const AppRoutes = ()=>(
    <Routes>
            <Route path={'/'} element={<Home/>} exact={true}/>
        {ROUTES.map((route,key)=>(
             <Route path={route.path} element={route.element} exact={route.exact} key={key}/>
        ))}
    </Routes>
)