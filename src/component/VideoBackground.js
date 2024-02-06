import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=> store.movies?.videoTrailer)
    useMovieTrailer(movieId)
  return (
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/CHKn-yDCE2w?si=VSy3-CCVxR2rXodT" + trailerVideo?.key}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoBackground;
