import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className='absolute z-10 left-6 bottom-2/4 translate-y-2/4 w-96 text-white text-left px-4 py-8'>
        <h1 className='font-bold text-5xl mb-6'>{props.title}</h1>
        <p className=' text-xl'>{props.overview}</p>
    </div>
  )
}

export default VideoTitle