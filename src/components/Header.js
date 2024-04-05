import React from 'react';
import { useEffect } from 'react';
import logo from '../assets/img/Netflix_Logo_PMS.png';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { toggleGtpSearchView } from '../utils/gtpSlice';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
        navigate('/');
      })
      .catch((error) => {
        console.log("Error occurred during sign out");
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
        }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGtpSearchClick = () => {
    dispatch(toggleGtpSearchView());
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-48 z-30' src={logo} alt='Netflix.png' />
      {user && (
        <div className='flex p-2'>
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg' onClick={handleGtpSearchClick}>Search with GTP</button>
          <button className='text-white bg-red-700 rounded-lg p-2 m-2 hover:border-red-500' onClick={handleSignOut} >Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;

















