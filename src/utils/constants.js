export const USER_AVATAR =
  "https://lh3.googleusercontent.com/a/ACg8ocLI7AmHcWsGHlXW_29O-kUR-O1h448CBImuP79a81ajhmA=s96-c";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const POSTER_IMG_PATH = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "Hindi"
  },
  {
    identifier: "es",
    name: "Spanish"
  }
]