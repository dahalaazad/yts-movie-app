import ReactImageFallback from "react-image-fallback";
import defaultIcon from "../../assets/default_avatar.webp";


export const CastDetails = ({movie}) => {
    // console.log(movie.TMDB_cast)
    return (
        <div className="persons-in-movie">
            <div className="director">
                Director:
                <div className="direct flex pa-sm">
                    <a href={`https://www.themoviedb.org/person/${movie.directorId}`}
                       target='_blank'
                       key={movie.directorId}>
                        {/*<img className='director-image' src={`https://image.tmdb.org/t/p/original/${directorPic}`}*/}
                        {/*     alt={`${director}_photo`}*/}
                        {/*/>*/}
                        <ReactImageFallback
                            className='director-image'
                            src={`https://image.tmdb.org/t/p/original/${movie.directorPic}`}
                            fallbackImage={defaultIcon}
                        />
                    </a>
                    <p className='pa-md mt-md'>{movie.director}</p>
                </div>
            </div>
            {/* {console.log(movie.cast)} */}
            <div className="cast">
                Cast:
                {movie?.TMDB_cast?.slice(0, 4).map((actor, i) => (

                    <div className="flex mt-sm pl-sm">
                        <a className='flex'
                           href={`https://www.themoviedb.org/person/${actor.id}`}
                           target="_blank"
                           key={actor.id}
                        >
                            {/*<img className='cast-image' src={actor.url_small_image}*/}
                            {/*     // alt={`${actor.name}_photo`}*/}
                            {/*     onError={(event) => {*/}
                            {/*         event.target.src = defaultIcon*/}
                            {/*     }}*/}
                            {/*     style={{borderRadius: '100%'}}/>*/}
                            <div className="cast-image">
                                <ReactImageFallback
                                    className='cast-image'
                                    src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                                    fallbackImage={defaultIcon}
                                />
                            </div>
                            <div className="names py-lg pl-sm">
                                <span className='yts-grey'>{actor.name}</span>
                            </div>
                        </a>
                        <span className='px-xs py-lg'>as {actor.character}</span>
                    </div>

                ))}
            </div>

        </div>


    );
};


