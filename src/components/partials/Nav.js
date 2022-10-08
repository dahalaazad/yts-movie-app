import {Link} from "react-router-dom";
import {AllMovieDisplay} from "./AllMovieDisplay";
import { Search } from "../../pages/Search";
import ytsLogo from "../../assets/svg/logo-yts.svg";
import {BrowseMovies} from "../../pages/BrowseMovies";
import {FavMovies} from "../../pages/FavMovies";

export const Nav = () => (
    <nav className="flex justify-between items-center wrapper bg-yts-dark text-light yts-header-footer yts-grey">

        <Link to={'/'} element={<AllMovieDisplay/>}>
            <div className="logo"><img src={ytsLogo} alt='imdbLogo'
                                       className='pr-md'/></div>
        </Link>

        <div className="nav-items flex items-center">
            <Link to={'/'} element={<AllMovieDisplay/>}>
                <div className="nav-item px-lg">Home</div>
            </Link>
            <Link to={'/browse'} element={<BrowseMovies/>}>
                <div className="nav-item px-lg">Browse Movies</div>
            </Link>
            <Link to={'/fav-movies'} element={<FavMovies/>}>
                <div className="nav-item px-lg">Favourite Movies</div>
            </Link>
            <div className="form-group pt-md">
{/*<Search/>*/}
            </div>
        </div>
    </nav>
)