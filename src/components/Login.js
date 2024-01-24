import React, { useState } from 'react'
import Header from './Header'

const Login = () =>{
    const [isSignIn , setIsSignIn] = useState('Sign In')

    const handleSignIn = () =>{
       setIsSignIn(!isSignIn);
    }
    return(  
        <div> 
            <div className='absolute'>
            <Header/>
                 <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backgroung/img"  />
            </div>
            <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold mb-4 text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type='text' placeholder='Full name ' className='w-full  rounded-sm bg-gray-500 py-4 my-4  pl-4' />}
                <input type='text' placeholder='Email Address / Phone number ' className='w-full  rounded-sm bg-gray-500 py-4 my-4  pl-4' />
                <input type='text' placeholder='Password' className='w-full  rounded-sm bg-gray-500 py-4 my-4 pl-4' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-sm '>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <input type='checkbox' className='my-4 p-4'/><span className='m'> Remember me </span>
            <span className='ml-6'>Need Help ?</span>
            <p className='mt-6 text-gray-400'>New to Netflix ? <span className='font-bold text-white cursor-pointer pl-2' onClick={()=>{handleSignIn()}}>{isSignIn ? "Do you Sign up ?  " : "Do you Sign In ?"}</span> </p>
            <p className='mt-4 font-mono font-semibold text-gray-400 text'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>
        </div>
    )
}

export default Login;