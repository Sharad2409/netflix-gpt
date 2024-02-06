import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addVideoTrailer } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const VideoMovieTrailer = async () => {
        const data = await fetch (
          "https://api.themoviedb.org/3/movie/"+ movieId +"/videos",
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addVideoTrailer(trailer))
    };
    
    useEffect(() => {
    VideoMovieTrailer();
    }, []);
}

export default useMovieTrailer