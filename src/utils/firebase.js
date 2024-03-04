
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKCpn_-6ckdCPBNQMNCSdOLLUZv1qh9-M",
  authDomain: "netflix-gpt-bfb2a.firebaseapp.com",
  projectId: "netflix-gpt-bfb2a",
  storageBucket: "netflix-gpt-bfb2a.appspot.com",
  messagingSenderId: "517596267717",
  appId: "1:517596267717:web:1a65c4960bf4495a1f1cac",
  measurementId: "G-GN0B69FY4V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();