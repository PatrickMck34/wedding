import React from "react";
import { Link } from "react-router-dom";
function Banner() {
    return (
        <div className="w-[20em] border-2 h-12 border-teal-600
         flex rounded">
            <Link to="/">

                <button className="p-[8px] w-24 xl:w-96  md:mt-24 bg-teal-600 h-5   text-xs justify-center items-center flex rounded-xl text-center text-pink-50 xl:text-5xl font-['Jomolhari']">Home</button>
            </Link>
            {/* <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/19070942/TED-Talk-What-Is-YOUR-Definition-of-Success-1024x512.jpg" className="w-full h-24 mx-auto flex "></img> */}
        </div>
    )
}
export default Banner