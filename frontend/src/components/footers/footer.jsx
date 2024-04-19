import React from "react";
import lace from "../../resources/lace.png";
function Footer() {
  return (
    <div className="flex flex-row justify-center items-center w-full  shadow-sm shadow-slate-700 bg-black">
        <div className="flex flex-row">
            <button className="text-pink-50 bg-slate-600 rounded-xl shadow-sm shadow-slate-400 p-1 ml-[-24em]">Home</button>

        </div>
            <img src={lace} className="h-12 mr-24"></img>
      <h1 className="text-white font-tangerine text-7xl mt-2">RSVP </h1>
      <img src={lace} className="h-12 ml-24"></img>
    </div>
  );
}
export default Footer