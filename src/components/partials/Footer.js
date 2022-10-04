import {Link} from "react-router-dom";
import {BrowseMovies} from "../../pages/BrowseMovies";
import {Home} from "../../pages/Home";

export const Footer = () => {
    return (
        <div className='yts-header-footer pt-xl yts-grey'>
            <div className="upper flex justify-center">
                <span className='px-md text-light'><a
                    href="https://gitlab.com/dahalaazad2019/ytsmovieredux"
                    target='_blank'>AD © 2022</a></span>
                <span className='px-md'><a href="https://yts.mx/blog" target='_blank'>Blog</a></span>
                <span className='px-md'><Link to={'/'} element={<Home/>}>Home</Link></span>
                <span className='px-md'><a href="https://yts.mx/api" target='_blank'>API</a></span>
                <span className='px-md'><Link to={'/browse'} element={<BrowseMovies/>}>Browse Movies</Link></span>
            </div>
            <div className="lower flex justify-center py-md">
                <span className='px-md'>Official Domain -</span>
                <span className='link'><a href="https://yts.mx" target='_blank'>YTS.MX</a></span>
            </div>

        </div>
    );
};

