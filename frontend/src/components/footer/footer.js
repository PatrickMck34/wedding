import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Link, useLocation } from "react-router-dom"
function Footer() {
  const location = useLocation();
  const history = useNavigate();
  if (location.pathname === '/' || location.pathname === '/start' || location.pathname === '/helper/intro' || location.pathname === '/help2') {
    return null;
  }

  return (
    <div className="flex justify-between items-center bg-teal-600 p-2 mt-[20%] shadow-sm shadow-teal-800">
      <button onClick={() => history(-1)} className="text-white">
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button onClick={() => history(1)} className="text-white">
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Footer;