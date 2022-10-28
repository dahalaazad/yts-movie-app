import noImage from "../assets/svg/noposter-big.svg";

export const customImageFallback = (e, poster,className) => {
    if (typeof poster === "undefined") {
        e.currentTarget.src = noImage;
    } else {
        e.currentTarget.src = `https://image.tmdb.org/t/p/original/${poster}`;
    }
    e.currentTarget.className = className
    // console.log(typeof poster)
}