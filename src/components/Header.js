import React from 'react';
import logo from '../assets/img/Netflix_Logo_PMS.png'
import { signOut } from "firebase/auth";
import {auth} from  '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () =>{
    const user = useSelector(store => store.user)
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
             navigate('/')
          // Sign-out successful.
        }).catch((error) => {
            navigate('/error')
          // An error happened.
        });
    }
    return(
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between '>
            <img className='w-48' src={logo} alt='Netflix.png'/>
          {user &&  <div className='flex p-2 '>
               <img className="m-2 w-12 h-12 rounded-xl "  src= {user.photoURL} alt="usericon" />
               <button className='text-white bg-red-700 rounded-lg p-2 m-2 hover:border-red-500' onClick={handleSignOut}>Sign out</button>
            </div> }
        </div>
      
    )
}

export default Header;