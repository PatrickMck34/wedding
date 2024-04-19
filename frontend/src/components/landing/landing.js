import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Landing() {


  return (
    <>
      <div className="flex justify-center   mx-auto w-full text-2xl">
        <Link to="/prolog">
          <button className=" mt-2 w-36 h-9 mr-1  xl:mr-8 border-2 border-teal-700 bg-teal-600  rounded-xl text-center text-pink-50  font-['Jomolhari']">Provider</button>
        </Link>
        <Link to="/helper/intro">
          <button className=" mt-2  w-36  h-9 border-2   border-teal-700  bg-teal-600  rounded-xl text-center text-pink-50  font-['Jomolhari']">Help</button>
        </Link>
      </div>

      <div className="flex flex-col w-full">
      {/* <img src={sideBanner} className="md:h-full w-[12%] md:ml-[5%] h-36 absolute xl:ml-[20%] border-2 border-slate-600 shadow-lg shadow-slate-700"></img> */}
        <img className=" items-center justify-center  mx-auto lg:w-[40%] w-[75%] max-w-md 2xl:max-w-2xl" src="https://i.ibb.co/sJ7MhrR/Land.png" alt="Loading Logo" />






        <div className="NeedToTalk mt-4 flex justify-center text-center text-black text-2xl xl:text-5xl  font-normal font-['Khula']">Need To Talk?</div>






<div className=" p-1 rounded-xl  mx-auto items-center flex justify-center">
    <div className="bg-teal-600 border-2 border-slate-800 rounded-xl shadow-md shadow-slate-500 p-[2px] justify-center items-center ">

        <iframe
src="https://www.chatbase.co/chatbot-iframe/HpF4UQWebMoiwpEdW7NsG"
title="Chatbot"
width="40%"
className="rounded-xl bg-gray-700 "
style={{"height": "100%", "min-height": "300px", "flex": "1", "margin":"auto" ,"min-width":"300px", "padding":"4px",}}
frameborder="0"
></iframe>
</div>
</div>



    
      </div>



    </>
  )
}
export default Landing