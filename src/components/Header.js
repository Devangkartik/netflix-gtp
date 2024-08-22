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
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGtpSearchView = useSelector((store)=>store.gtp.showGtpSearchView)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
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

const handleLanguageChange = (e) =>{
   dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='fixed w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between z-30'>
      <img className=' w-48  mx-auto md:mx-0 ' src={logo} alt='Netflix.png' />
      { 
       user && (<div className='flex p-2 justify-center'>
       { showGtpSearchView && <select className='p-2 m-2 md:py-2 md:px-4 md:mx-4 my-2 rounded-lg bg-gray-900 text-white ' onChange={handleLanguageChange}>
               {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
               ))}
        </select>}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg ' onClick={handleGtpSearchClick}>{ showGtpSearchView ? "Homepage":"Search with GTP"}</button>
          <button className='text-white bg-red-700 rounded-lg p-2 m-2 hover:border-red-500 ' onClick={handleSignOut} >Sign out</button>
        </div>)
     }
    </div>
  );
};

export default Header;

















