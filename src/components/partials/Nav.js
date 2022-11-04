import {Link} from "react-router-dom";
import {AllMovieDisplay} from "./AllMovieDisplay";
import { Search } from "./Search";
import ytsLogo from "../../assets/svg/logo-yts.svg";
import {BrowseMovies} from "../../pages/BrowseMovies";
import {FavMovies} from "../../pages/FavMovies";
import {Home} from "../../pages/Home";

export const Nav = () => (
    <nav className="navbar-main flex justify-between items-center wrapper bg-yts-dark text-light yts-header-footer yts-grey fixed"
         style={{marginBottom:'5%'}}>


        <Link to={'/yts-movie-app'} element={<Home/>}>
            <div className="logo"><img src={ytsLogo} alt='imdbLogo'
                                       className='pr-md'/></div>
        </Link>

        <div className="nav-items flex items-center">
            <Search/>
            <Link to={'/yts-movie-app'} element={<Home/>}>
                <div className="nav-item px-lg">Home</div>
            </Link>
            <Link to={'/yts-movie-app/browse'} element={<BrowseMovies/>}>
                <div className="nav-item px-lg">Browse Movies</div>
            </Link>
            <Link to={'/yts-movie-app/fav-movies'} element={<FavMovies/>}>
                <div className="nav-item px-lg">Favourite Movies</div>
            </Link>
            <div className="form-group pt-md">

            </div>
        </div>
    </nav>
)