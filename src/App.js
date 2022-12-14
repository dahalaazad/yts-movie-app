//import logo from './logo.svg';
import './App.scss';
import {MainLayout} from './layouts/MainLayout';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "./utils/getMovies";



export default function App() {
    const dispatch = useDispatch();
    useEffect(async () => {
        document.title = 'YTS Movie App'
        await loadMovies();
    }, []);

    const loadMovies = async () => {
        await dispatch(getMovies());
        //await dispatch(getDirectorName(favMovies))
    }

    return (
        <>
            <MainLayout className='yts-font'/>
        </>
    );
}


