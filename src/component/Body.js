import React from 'react'
import Login from './Login'
import bgImg from '../images/myke-simon-atsUqIm3wxo-unsplash.jpg'

const Body = () => {
  return (
    <>
      <div className='w-full absolute z-0 top-0 left-0'>
        <img src={bgImg} alt="bgimage" className='w-full h-screen object-cover'/>
      </div>
      <Login />
    </>
  )
}

export default Body