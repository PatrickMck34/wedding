import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import { HomeIcon } from '@heroicons/react/solid';
import {useSelector} from 'react-redux'
function Header() {
  const [timeLeft, setTimeLeft] = useState(300); // Time left in seconds
  const [isExtended, setIsExtended] = useState(false);
  const timer = useRef(null);
const user = useSelector(state => state.session.user)
  const resetTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setTimeLeft(300)
    timer.current = setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, timeLeft * 1000); // Convert to milliseconds
  };
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  const extendTimeout = () => {
    setIsExtended(true);
    setTimeLeft(timeLeft * 10);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const id = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [timeLeft]);

  useEffect(() => {
    document.addEventListener('click', resetTimer);
    resetTimer(); // Start the timer for the first time

    return () => {
      document.removeEventListener('click', resetTimer);
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);


  const location = useLocation();

  // Don't render the header on the /excludePage route
  if (location.pathname === '/' || location.pathname === '/start' || location.pathname === '/admin/home' || location.pathname === '/admin/approvals' ||location.pathname.includes('/user/admin/')) {
    return null;
  }
  return (
    <div className="flex  w-full items-center justify-center shadow-sm p-1 bg-gray-200/80 shadow-slate-400 mb-2 lg:text-4xl ">
      <div className="flex flex-row w-full items-center justify-center  ">

        <Link to={"/"}>
          <HomeIcon className="h-8 w-8 2xl:h-24 2xl:w-24 lg:h-12 lg:w-12 border-2 border-teal-300 xl:ml-[-25em] lg:ml-[-10%]  shadow-md shadow-slate-600 text-teal-400 bg-blue-100 rounded-xl xl:text-xl" />
       
        </Link>
        <div className="flex ml-5 text-sm xl:text-2xl 2xl:text-5xl">

          Redirect in: {formatTime(timeLeft)}
          {!isExtended && <button onClick={extendTimeout} className="bg-teal-600 border-2 border-slate-600 shadow-md shadow-slate-600 text-pink-50 rounded-xl ml-5 p-1 ">Extend Timeout</button>}
        </div>
      </div>
    </div>
  )
}
export default Header