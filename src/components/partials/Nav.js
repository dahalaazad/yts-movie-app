import {Link} from "react-router-dom";
import {Home} from "../../pages/Home";
import { Search } from "../../pages/Search";

export const Nav = () => (
    <nav className="flex justify-between items-center wrapper bg-primary text-light">

        <Link to={'/'} element={<Home/>}>
            <div className="logo">Logo</div>
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