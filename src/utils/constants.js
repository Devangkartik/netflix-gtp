export const userLogo = "https://avatars.githubusercontent.com/u/93068034?v=4";

export const bgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
{ identifier: "en", name: "English" },
{ identifier: "hindi", name: "Hindi" },
{ identifier: "spanish", name: "Spanish" }
];

