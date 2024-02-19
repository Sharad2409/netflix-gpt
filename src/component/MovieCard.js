import React from "react";
import { POSTER_IMG_PATH } from "../utils/constants";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

const MovieCard = ({
  posterPath,
  overview,
  title,
  release_date,
  vote_average,
}) => {
  const [popupTrigger, setPopupTrigger] = useState(false);
  const handlePopupTrigger = () => {
    setPopupTrigger(!popupTrigger);
  };
  const getReleaseDate = new Date(release_date).toLocaleDateString();

  return (
    <div className="w-44 pr-4">
      <ImagePopup trigger={popupTrigger} setTrigger={setPopupTrigger}>
        <div className=" flex text-white max-w-[700px] m-auto p-8 bg-red-700 rounded-sm bg-opacity-70 relative">
          <div className="px-2 w-1/3">
            <img src={POSTER_IMG_PATH + posterPath} alt="movie poster" />
          </div>
          <div className="px-2 w-2/3">
            <h3 className="mb-4 text-2xl">{title}</h3>
            <p className="mb-2">{overview}</p>
            <p className="mb-2">
              Average Ratings: {Math.round(vote_average)}/10
            </p>
            <p className="">Release Date: {getReleaseDate}</p>
          </div>
        </div>
      </ImagePopup>
      <div onClick={handlePopupTrigger} className=" cursor-pointer">
        <img src={POSTER_IMG_PATH + posterPath} alt="movie poster" />
      </div>
    </div>
  );
};

export default MovieCard;
