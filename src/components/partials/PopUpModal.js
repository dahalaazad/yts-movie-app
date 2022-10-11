import CloseIcon from "@mui/icons-material/Close";
import {useSelector} from "react-redux";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import magnetIcon from "../../assets/svg/icons8-magnet-49.png";
import {torrentType} from "../../utils/torrentType";
import {videoQuality} from "../../utils/videoQuality";


export const PopUpModal = ({setOpen}) => {
    const movie = useSelector(state => state.movie.movie);
    // console.log(movie.torrents);




    return (
        <>
            {/*Below div remains outside the Modal and clicking on it closes the Modal*/}
            <div className="dark-popup-bg " onClick={() => setOpen(false)}/>
            {/*Upto Here*/}
            <div className="overlay py-sm px-sm">
                <div className="popUp-top flex justify-center">
                    <span className="popUp-title">Select movie quality</span>
                    <div className="close-icon yts-grey">
                        <CloseIcon onClick={() => setOpen(false)} style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="dloads-holder flex justify-evenly text-primary px-md py-lg">
                    {movie.torrents.map(torrent => (

                            <div className='dloads pa-md flex-col justify-center' key={torrent.hash}>
                                <div className={`${videoQuality(torrent.quality)}`}/>
                                <div className='py-md px-lg'>{torrentType(torrent.type)}</div>
                                <div className='py-md px-xl'>File Size</div>
                                <div className='py-md'>{torrent.size}</div>
                                <div className="dload-button bg-yts-green pa-md">
                                    <a href={`${torrent.url}`}
                                       target='_blank'
                                       title={`Download ${movie.title} ${torrent.quality} Torrent`}
                                       className=' pa-md mt-md'>
                                        <SystemUpdateAltIcon/>
                                        <span className='text-light px-sm bold'>Download</span>
                                    </a>
                                </div>
                                <a
                                    href={`magnet:?xt=urn:btih:${torrent.hash}&tr=http://urlto/announce`}
                                    target='_blank'
                                    className=''>
                                    <img className='mt-md pl-three-xl py-md' src={magnetIcon} alt="magnet-icon"/>
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

