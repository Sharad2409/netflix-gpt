import React, { useRef, useState } from "react";
import bgImg from "../images/marques-kaspbrak.jpg";
import Header from "./Header";
import { checkValidData } from "../utils/ValidData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef("");

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  const submitHanlder = () => {
    const message = checkValidData(
      userName.current?.value,
      email.current.value,
      password.current.value,
      isSignIn
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header isSignIn={isSignIn} />
      <div className="w-full absolute -z-50 top-0 left-0">
        <img
          src={bgImg}
          alt="bgimage"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="flex items-center justify-center opacity-95 p-2 h-screen">
        <div className="bg-black w-full max-w-md px-16 pt-16 pb-24 max-md:px-12 max-md:pb-20">
          <h1 className="text-white font-bold text-left mb-6 text-2xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isSignIn ? (
              <div className="form-control">
                <input
                  ref={userName}
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 mb-6 bg-gray-700 rounded-sm text-white focus-visible:outline-none"
                />
              </div>
            ) : (
              ""
            )}
            <div className="form-control">
              <input
                ref={email}
                id="email"
                type="text"
                placeholder="Email Address"
                className="w-full p-2 mb-6 bg-gray-700 rounded-sm text-white focus-visible:outline-none"
              />
            </div>
            <div className="form-control">
              <input
                ref={password}
                id="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-6 bg-gray-700 rounded-sm text-white focus-visible:outline-none"
              />
            </div>
            <p className="text-red-500 text-lg text-left">{errorMessage}</p>
            <button
              type="submit"
              onClick={submitHanlder}
              className="w-full p-3 bg-red-700 text-white mb-8 mt-4 rounded-sm"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            className="text-white text-left cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New user? Sign up now"
              : "Already registered? Sign in now"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
