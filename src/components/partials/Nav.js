import {Link} from "react-router-dom";
import {Home} from "../../pages/Home";
import { Search } from "../../pages/Search";
import ytsLogo from "../../assets/svg/logo-yts.svg";

export const Nav = () => (
    <nav className="flex justify-between items-center wrapper bg-yts-dark text-light">

        <Link to={'/'} element={<Home/>}>
            <div className="logo"><img src={ytsLogo} alt='imdbLogo'
                                       className='pr-md'/></div>
        </Link>

        <div className="nav-items flex items-center">
            <Link to={'/'} element={<Home/>}>
                <div className="nav-item px-lg">Home</div>
            </Link>
            <div className="form-group pt-md">
<Search/>
            </div>
        </div>
    </nav>
)