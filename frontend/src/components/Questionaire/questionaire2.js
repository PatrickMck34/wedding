import React from 'react'
import { Link } from "react-router-dom"
import { CSSTransition } from 'react-transition-group';
import Section2 from './section2.js';
import Section1 from './section1.js';
import Section3 from './section3.js';
import HelpComponent from '../sunflower/sunflower.jsx';
import Categories from '../categoriesPage/categoriesPage.jsx';

function Questionaire2() {

  const [currentSection, setCurrentSection] = React.useState(1);

  const Trans = () => {
    setCurrentSection((currentSection % 4) + 1);
  };
  const Results = () => {

  }


  return (
    <div>
      <div className="w-full flex ">
<div className="flex flex-col ml-[70%] mb-[10%] w-full">Key:
          <p className="h-3 w-3 bg-yellow-800"> <span className=" ml-4 ">
              Legal
              </span>
              <p className="h-3 w-3 bg-slate-600"> <span className=" ml-4 ">Psychology</span>
                  <p className="h-3 w-3 bg-teal-600"> <span className=" ml-4 ">Health</span>
                      <p className="h-3 w-3 bg-slate-400"> <span className=" ml-4 ">Crisis</span>

                      </p>
                  </p>
              </p>
          </p>
      </div>
    </div>
        <HelpComponent currentSection={currentSection} />
      <div className="relative overflow-hidden h-full w-full">
        <CSSTransition
          in={currentSection === 1}
          timeout={100}
          classNames="slide"
          unmountOnExit
        >
          <Section1 />
        </CSSTransition>
          <CSSTransition
            in={currentSection === 2}
            timeout={200}
            classNames="slide"
            unmountOnExit
          >
            <Categories />
          </CSSTransition>
          
       
        <CSSTransition
          in={currentSection === 3}
          timeout={200}
          classNames="slide"
          unmountOnExit
        >

          <Section2 />

        </CSSTransition>
        <CSSTransition
          in={currentSection === 4}
          timeout={100}
          classNames="slide"
          unmountOnExit
        >
          <Section3 />
        </CSSTransition>
      </div>
      {(currentSection != 1 && currentSection != 4) ? (
        <div>
          <Link to="/results">
            <button className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl">Results</button>
          </Link>
        
        <button onClick={Trans} className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl">More Options</button>
      
        </div>
      ) : (
        <div>
        
        </div>
      ) } {(currentSection == 4) ? (
        <div>
<Link to="/results">
            <button className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl">Results</button>
          </Link>
        </div>) : (<div>

        </div>)}
        {(currentSection == 1) ? (
          <div>
  
          <button onClick={Trans} className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl">Next</button>
      
        </div>) : (<div>

        </div>)}
     
         
      <div className="flex lg:mt-[26%] mt-5 md:ml-12 ">

 
      </div>
    </div>
  );
}


export default Questionaire2