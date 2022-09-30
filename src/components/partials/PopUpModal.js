import CloseIcon from "@mui/icons-material/Close";
import {useSelector} from "react-redux";
import HD_Icon from "../../assets/svg/icon-720p.svg";


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
                <div className="flex text-primary px-md py-lg">
                    {movie.torrents.map(torrent => (
                            <>
                                <div className='dloads' key={torrent.hash}>
                                    <div
                                        className={`${videoQuality(torrent.quality)}`}
                                        key={torrent.hash}></div>
                                    <div>{torrentType(torrent.type)}</div>
                                    <div>File Size</div>
                                    <div>{torrent.size}</div>
                                    <div>Download button</div>
                                    <div>magnet</div>
                                </div>
                            </>

                        )
                    )
                    }

                </div>
            </div>

        </>
    );
};

