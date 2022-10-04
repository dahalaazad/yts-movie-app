import CloseIcon from "@mui/icons-material/Close";
import {useSelector} from "react-redux";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import magnetIcon from "../../assets/svg/icons8-magnet-49.png";


export const PopUpModal = ({setOpen}) => {
    const movie = useSelector(state => state.movie.movie);
    console.log(movie.torrents);
    const videoQuality = (quality) => {
        // console.log(quality)
        switch (quality) {
            case '720p':
                return 'hd';
            // console.log('hd');
            case '1080p':
                return 'full-hd';
            // console.log('full-hd');
            case '2160p':
                return 'four-K';
            // console.log('4K');
            case '3D':
                return 'three-D';
            // console.log('3D');
            default:
                break;
        }
    }

    const torrentType = (type) => {
        switch (type) {
            case 'web':
                return 'WEB';
            // console.log('hd');
            case 'bluray':
                return 'BluRay';
            // console.log('full-hd');
            default:
                break;
        }
    }

    return (
        <>
            {/*Below div remains outside the Modal and clicking on it closes the Modal*/}
            <div className="dark-popup-bg " onClick={() => setOpen(false)}/>
            <div className="overlay py-sm">
                <div className="popUp-top flex justify-center">
                    <span className="popUp-title">Select movie quality</span>
                    <div className="close-icon yts-grey">
                        <CloseIcon onClick={() => setOpen(false)} style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="flex justify-evenly text-primary px-md py-lg">
                    {movie.torrents.map(torrent => (

                            <div className='dloads pa-md flex-col justify-center' key={torrent.hash}>
                                <div className={`${videoQuality(torrent.quality)}`}/>
                                <div className='py-md'>{torrentType(torrent.type)}</div>
                                <div className='pb-md'>File Size</div>
                                <div className='pb-md'>{torrent.size}</div>
                                <a href={`${torrent.url}`}
                                     target='_blank'
                                     title={`Download ${movie.title} ${torrent.quality} Torrent`}
                                     className='dload-button bg-yts-green pa-md'>
                                    <SystemUpdateAltIcon/>
                                    <span className='text-light px-sm bold'>Download</span>
                                </a>
                                <a
                                    href={`magnet:?xt=urn:btih:${torrent.hash}&tr=http://urlto/announce`}
                                    target='_blank'
                                    className='ma-lg'>
                                    <img className='mt-md' src={magnetIcon} alt="magnet-icon"/>
                                </a>
                            </div>


                        )
                    )
                    }

                </div>
            </div>

        </>
    );
};

