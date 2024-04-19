import React, { useEffect, useRef, useState } from 'react';
import sunflower from '../../resources/sunflower.png';
import './helpBot.css'
import { Link } from 'react-router-dom';
function HelpBot({ currentSection }) {
  const [showHelp, setShowHelp] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const sunflowerRef = useRef(null);

  useEffect(() => {
    const sunflowerElement = sunflowerRef.current;
    const handleAnimationEnd = () => {
      setShowMessage(true);
    };

    sunflowerElement.addEventListener('animationend', handleAnimationEnd);
    return () => {
      sunflowerElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  const handleImageClick = () => {
    setShowHelp(prevShowHelp => !prevShowHelp);
  };

  const getHelpMessage = () => {
    switch (currentSection) {
      case 1:
        return 'The zipcode should load automatically, if not please enter your zipcode then click the next button to continue.';
      case 2:
        return 'Please select the catagories that apply to you. Then click the next button to continue.';
      case 3:
        return 'Finally select the type of help you are looking for. Then click the results button to see your local resources.';
      default:
        return 'General help message...';
    }
  };
  return (


    <div className="flex flex-col ">


      <div className="flex flex-row p-2">
        {showHelp && (
          <div className=" flex   text-sm font-semibold ">
            <h2 className="text-lg absolute items-center justify-center w-full flex font-semibold sunflower text-teal-600">Persephone</h2>
          </div>
        )}
        <div className="justify-center items-center flex w-full mt-[6%] ">

          <img
            src={sunflower}
            alt="sunflower"
            ref={sunflowerRef}
            className=" h-24 flex  justify-center items-center animate-move duration-5000 ease-in-out sunflower "
            onClick={handleImageClick}
          />
        </div>
        {showMessage && (
          <div className="flex mr-3 flex-col absolute  font-semibold w-fit mt-[40%] border-2 border-slate-900 bg-teal-700  text-pink-50 rounded-xl p-1 text-center">
            <p>If you need help find the sunflower and Persephone will offer some guidance.</p>
            <Link to={"/help2"}>

              <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 font-serif text-sm  mx-auto rounded-xl p-1  mt-5 mb-1 w-24">Got It!</button>
            </Link>
          </div>
        )}

      </div>



    </div>
  )
}
export default HelpBot;