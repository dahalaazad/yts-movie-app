import CloseIcon from "@mui/icons-material/Close";
import {useSelector} from "react-redux";


export const PopUpModal = ({setOpen}) => {
    const movie = useSelector(state => state.movie.movie);
    // console.log(movie.torrents)
    return (
        <>
            {/*Below div remains outside the Modal and clicking on it closes the Modal*/}
            <div className="dark-popup-bg " onClick={() => setOpen(false)}/>
            <div className="overlay py-sm">
                <div className="popUp-top flex justify-center">
                    <span className="popUp-title">Select movie quality</span>
                    <div className="close-icon yts-grey">
                        <CloseIcon onClick={() => setOpen(false)} style={{cursor:'pointer'}}/>
                    </div>
                </div>
                <div className="dloads flex text-danger">
                    {movie.torrents.map(torrent => (
                        <div>{torrent.quality}</div>
                    ))}
                </div>
                </div>

        </>
    );
};

