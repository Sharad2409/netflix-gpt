import React, { useRef } from 'react'
import { useState } from 'react'
import { checkValidData } from '../utils/ValidData';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const userName = useRef("")

  function toggleSignInForm () {
    setIsSignIn(!isSignIn)
  }

  const submitHanlder = () => {
    const message = checkValidData (userName.current.value, email.current.value, password.current.value, isSignIn)
    setErrorMessage(message)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-black w-full max-w-md px-16 pt-16 pb-24 opacity-85'>
          <h1 className='text-white font-bold text-left mb-6 text-2xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          <form onSubmit={(e)=> e.preventDefault()}>
            {
              !isSignIn ? <div className='form-control'>
              <input ref={userName} id="username" type='text' placeholder='Username' className='w-full p-2 mb-6 bg-gray-700 rounded-sm' />
            </div> : ""
            }
            <div className='form-control'>
              <input ref={email} id="email" type='text' placeholder='Email Address' className='w-full p-2 mb-6 bg-gray-700 rounded-sm' />
            </div>
            <div className='form-control'>
              <input ref={password} id="password" type='password' placeholder='Password' className='w-full p-2 mb-6 bg-gray-700 rounded-sm' />
            </div>
            <p className='text-red-500 text-lg text-left'>{errorMessage}</p>
            <button type='submit' onClick={submitHanlder} className='w-full p-3 bg-red-500 text-white mb-8 mt-4 rounded-sm'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          </form>
          <p className='text-white text-left cursor-pointer' onClick={toggleSignInForm}>
            { isSignIn ? "New user? Sign Up Now" : "Already registered? Sign In Now"} 
          </p>
      </div>
    </div>
  )
}

export default Login