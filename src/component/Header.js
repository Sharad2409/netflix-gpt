import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((appStore) => appStore.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this will be called unsubscribe when component unmounts
    return () => unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    return dispatch(toggleGptSearchView());
  };

  const handleChangeLang = (e) => {
    return dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="flex justify-between items-center px-10 py-6 absolute left-0 top-0 w-full z-10 text-white max-md:justify-center max-md:flex-col max-md:p-4">
      <div className="max-md:mb-4">
        <svg
          width="100"
          height="70"
          viewBox="0 0 350 240"
          className="looka-1j8o68f"
        >
          <defs id="SvgjsDefs1173">
            <linearGradient id="SvgjsLinearGradient1178">
              <stop id="SvgjsStop1179" stopColor="#7d141d" offset="0"></stop>
              <stop id="SvgjsStop1180" stopColor="#ff1e27" offset="1"></stop>
            </linearGradient>
          </defs>
          <g
            id="SvgjsG1174"
            featurekey="monogramFeature-0"
            transform="matrix(4.0439049362531305,0,0,4.0439049362531305,85.58926903266028,-70.36395206131371)"
            fill="url(#SvgjsLinearGradient1178)"
          >
            <path d="M32.94 18 l6.48 0 l0 42.6 l-0.72 0 l-27.42 -27.54 l0 26.94 l-6.48 0 l0 -42.6 l0.72 0 l27.42 27.54 l0 -26.94 z"></path>
          </g>
          <g
            id="SvgjsG1175"
            featurekey="nameFeature-0"
            transform="matrix(1.4974505424027835,0,0,1.4974505424027835,-5.469738231444686,177.94908607115605)"
            fill="white"
          >
            <path d="M22.93 11.777000000000001 l5.8398 0 l0 28.223 l-6.7773 0 l-12.5 -20.176 l0 20.176 l-5.8398 0 l0 -28.223 l6.6992 0 l12.578 20.059 l0 -20.059 z M52.441874999999996 16.934 l-10.469 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 6.3867 l10.469 0 l0 5.1758 l-16.367 0 l0 -28.223 l16.367 0 l0 5.1563 z M74.84421875 11.777000000000001 l0 5.1563 l-6.6992 0 l0 23.066 l-5.8008 0 l0 -23.066 l-6.7383 0 l0 -5.1563 l19.238 0 z M95.918 16.934 l-10.742 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 11.563 l-5.8984 0 l0 -28.223 l16.641 0 l0 5.1563 z M106.777325 34.8242 l8.8477 0 l0 5.1758 l-14.707 0 l0 -28.223 l5.8594 0 l0 23.047 z M120.0976125 40 l0 -28.223 l5.8594 0 l0 28.223 l-5.8594 0 z M130.15625375 40 l10.996 -14.727 l-10.684 -13.496 l7.1289 0 l7.0313 9.2578 l7.0313 -9.2578 l7.1289 0 l-10.684 13.496 l10.996 14.727 l-7.4609 0 l-7.0117 -9.9805 l-7.0117 9.9805 l-7.4609 0 z M175.52696875 40.39063 c-8.1445 0 -14.141 -5.625 -14.141 -14.434 c0 -8.9258 6.1328 -14.57 14.434 -14.57 c5.4492 0 9.9609 2.4023 12.422 6.6406 l-5.1367 2.7344 c-1.4844 -2.8906 -4.1406 -4.2773 -7.2852 -4.2773 c-4.8828 0 -8.5547 3.3594 -8.5547 9.3359 c0 5.7617 3.4375 9.4727 8.7695 9.4727 c3.6133 0 6.9336 -1.7969 7.7344 -5.918 l-7.7148 0 l0 -4.707 l13.262 0 l0 15.332 l-4.6094 0 l0 -3.9063 c-1.8164 2.6758 -4.8633 4.2969 -9.1797 4.2969 z M207.12928125 11.777000000000001 c5.5273 0 8.9648 4.1016 8.9648 9.1211 c0 5.1367 -3.4375 8.9844 -8.9648 8.9844 l-5.8789 0 l0 10.117 l-5.8594 0 l0 -28.223 l11.738 0 z M206.15228125 24.98 c2.9297 0 4.2969 -1.6211 4.2969 -4.1602 c0 -2.4414 -1.3672 -4.1406 -4.2969 -4.1406 l-4.9023 0 l0 8.3008 l4.9023 0 z M237.38328125 11.777000000000001 l0 5.1563 l-6.6992 0 l0 23.066 l-5.8008 0 l0 -23.066 l-6.7383 0 l0 -5.1563 l19.238 0 z"></path>
          </g>
        </svg>
      </div>
      {user && (
        <div className="flex items-center pl-2 max-md:pl-0">
          {showGptSearch && (
            <select
              className="bg-gray-900 p-2 mr-4"
              onChange={handleChangeLang}
            >
              {SUPPORTED_LANGUAGES.map((options) => (
                <option key={options.identifier} value={options.identifier}>
                  {options.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mr-6 bg-red-700 rounded-sm max-md:mr-2"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>
          <div className=" w-14 h-14 rounded-full p-1 border border-solid border-white">
            <img
              className="rounded-full"
              src={user?.photoURL}
              alt="username"
            ></img>
          </div>
          <div className="ml-2">
            <p className="text-md">Hi, {user?.displayName}</p>
            <p className="cursor-pointer text-md" onClick={signOutHandler}>
              Sign Out
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
