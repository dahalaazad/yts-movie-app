import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {customImageFallback} from "../../utils/customImageFallback";

export const SimilarMovies = ({suggestedMovies}) => {


    console.log(suggestedMovies)
    return (
        <div className='similar-movies-grid'>
            {suggestedMovies?.map((movie)=>(
                <div className='ma-md' key={movie.id}>
               <Link  onClick={() => console.log(movie.slug)}
                      to={`/yts-movie-app/${movie.slug}`}
                      state={{
                          currentMovieId: movie.id
                      }}
               key={movie.id}>

                       <div className='similar-movies'>
                           <img src={movie.medium_cover_image}
                                className='similar-movies-image'
                                onError={(e) => customImageFallback(e, movie.TMDB_poster, 'movie-poster')}
                           />
                       </div>

               </Link></div>
            ))}
        </div>
    );
};


