function YoutubeTrailerEmbed({trailerCode}) {
    const link = `https://www.youtube.com/embed/${trailerCode}`
    //console.log('link---->', link)
    return (
        <div className="yt-trailer pa-md" style={{width: '60%', borderRadius: '50%'}}>
            <div className="aspect-w-35 aspect-h-25">
                <iframe src={link} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>


    );
}

export default YoutubeTrailerEmbed;