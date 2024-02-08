import React from 'react'
import GptSearchBox from './GptSearchBox'
import gptBgImage from "../images/jametlene-reskp.jpg";

const GptSearch = () => {
  return (
    <>
        <div className="w-full absolute -z-50 top-0 left-0">
            <img
            src={gptBgImage}
            alt="bgimage"
            className="w-full h-screen object-cover"
            />
        </div>
      <GptSearchBox />
    </>
  )
}

export default GptSearch