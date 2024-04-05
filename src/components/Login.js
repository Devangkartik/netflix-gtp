import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validation'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgImage } from '../utils/constants';

const Login = () =>{
    const [isSignInForm , setIsSignInForm] = useState(true)
    const [errorMessage , setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    

 const email = useRef(null)
 const password = useRef(null)
 const name = useRef(null)

     const handleButtonClick =  () =>{
      
      // console.log(email.current.value);
      // console.log(password.current.value);
      
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message)
  
    if(message) return ;

    if(!isSignInForm){
        //this is my signUp form
           createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    const  user =  userCredential.user;
    updateProfile(user, {
      displayName: name.current.value 
     
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
      dispatch(addUser({
        uid : uid,
        email : email,
        displayName : displayName,
        
      }));
     
    }).catch((error) => {
      setErrorMessage(error.message)
     
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
  })
    }else{
      //this is my signIn logic
           signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
     console.log(user) ; 
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });
  
  }
 }

    const handleSignIn = () =>{
      setIsSignInForm(!isSignInForm);
    }

    return(  
        <div> 
            <div className='absolute '>
            <Header/>
                 <img className='' src={bgImage} alt="backgroung/img"  />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold mb-4 text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Full name ' className='w-full  rounded-sm bg-gray-500 py-4 my-4  pl-4' />}
                <input ref = {email} type='text' placeholder='Email Address / Phone number ' className='w-full  rounded-sm bg-gray-500 py-4 my-4  pl-4' />
                <input ref = {password} type='text' placeholder='Password' className='w-full  rounded-sm bg-gray-500 py-4 my-4 pl-4' />
               <p className='font-bold text-red-600'>{errorMessage}</p>
                <button  className='p-4 my-6 bg-red-700 w-full rounded-sm ' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <input type='checkbox' className='my-4 p-4'/><span className='m'> Remember me </span>
            <span className='ml-6'>Need Help ?</span>
            <p className='mt-6 text-gray-400'>New to Netflix ? <span className='font-bold text-white cursor-pointer pl-2' onClick={handleSignIn}>{isSignInForm ? "Do you Sign up ?  " : "Do you Sign In ?"}</span> </p>
            <p className='mt-4 font-mono font-semibold text-gray-400 text'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>
        </div>
    )
}

export default Login;