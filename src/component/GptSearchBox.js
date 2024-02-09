import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null)
  const handleGptSearchClick = async ()=> {
    console.log(searchText.current.value)
  }
  return (
    <div className=" mt-36 py-8 px-14 max-w-3xl m-auto bg-black/[0.8] rounded-sm max-md:mt-44 max-md:px-6">
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" w-2/3 p-3 rounded-s-sm text-lg"
        ></input>
        <button
          type="submit"
          className=" w-1/3 bg-red-700 p-2 text-white rounded-e-sm text-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
