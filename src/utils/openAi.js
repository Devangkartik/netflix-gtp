// import { GEMINI_SEARCH_KEY } from "./constants";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ensure the API key is correctly set
if (!process.env.REACT_APP_GEMINI_SEARCH_KEY) {
  throw new Error("API key is missing. Please set the GEMINI_SEARCH_KEY in your environment variables.");
}
// {
//     apiKey: process.env.REACT_APP_GEMINI_SEARCH_KEY,
//     dangerouslyAllowBrowser: true // Ensure this is necessary for your use case
//   }
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_SEARCH_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
