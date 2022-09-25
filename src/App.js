//import logo from './logo.svg';
import './App.scss';
import {MainLayout} from './layouts/MainLayout';
import {FavMovies} from "./components/FavMovies";



function App() {
    return (
        <>
            <MainLayout/>
            <FavMovies/>
        </>
    );
}

export default App;
