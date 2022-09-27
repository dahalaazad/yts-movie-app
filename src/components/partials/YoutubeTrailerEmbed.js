

function YoutubeTrailerEmbed({trailerCode}) {
    const link = `https://www.youtube.com/embed/${trailerCode}`
    //console.log('link---->', link)
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe src={link} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    );
}

export default YoutubeTrailerEmbed;