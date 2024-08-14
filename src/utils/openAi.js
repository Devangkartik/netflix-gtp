import { GEMINI_SEARCH_KEY } from "./constants";


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(GEMINI_SEARCH_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",dangerouslyAllowBrowser : true});