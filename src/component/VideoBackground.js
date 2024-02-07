import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=> store.movies?.videoTrailer)
    useMovieTrailer(movieId)
  return (
    <div className="w-screen before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black before:opacity-5">
        <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  );
};

export default VideoBackground;
