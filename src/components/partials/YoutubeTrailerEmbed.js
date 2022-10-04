import ReactImageFallback from "react-image-fallback";
import {useSelector} from "react-redux";

function YoutubeTrailerEmbed({trailerCode,ss1,ss2}) {
    const link = `https://www.youtube.com/embed/${trailerCode}`;
    const movie = useSelector(state => state.movie.movie);
    console.log(ss1)
    //console.log('link---->', link)
    return (
        <div className="yt-trailer flex justify-evenly px-xxl" >
            <div className="aspect-w-35 aspect-h-25 ml-lg sc-hover">
                <iframe src={link} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className='sc-hover'><a href={movie.large_screenshot_image1} target='_blank'><img src={movie.medium_screenshot_image1}/></a></div>
            <div className='sc-hover'><a href={movie.large_screenshot_image2} target='_blank'><img src={movie.medium_screenshot_image2}/></a></div>



        </div>


    );
}

export default YoutubeTrailerEmbed;