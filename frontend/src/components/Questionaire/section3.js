
import { useSelector, useDispatch } from "react-redux"
import React from 'react'

function Section3() {
    const dispatch = useDispatch()
    const section2 = useSelector(state => state.section.section2)
    const [section3, setSection3] = React.useState({
        ...section2,
        confidential: false,
        nonConfidential: false,
        healthCenter: false,
        dvProgram: false,
        psychProgram: false,
        callpolice: false,
        advocacyProgram: false,
        factSheet: false,
        lightbulb: false,
        altCare: false,
    })

    function confidential() {
        document.getElementById("con").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, ...section3, confidential: true });
    }
    function nonConfidential() {
        document.getElementById("non").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section3, nonConfidential: true });
    }
    function healthCenter() {
        document.getElementById("health").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section3, healthCenter: true });
    }
    function dvProgram() {
        document.getElementById("dv").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section3, dvProgram: true });
    }
    function psychProgram() {
        document.getElementById("psy").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section3, psychProgram: true });
    }


    function advocacyProgram() {
        document.getElementById("advocacy").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, advocacyProgram: true });
    }
    function factSheet() {
        document.getElementById("fact").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, factSheet: true });
    }
    function lightbulb() {
        document.getElementById("light").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, lightbulb: true });
    }
    function altCare() {
        document.getElementById("alt").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, altCare: true });
    }
    function hivSupport() {
        document.getElementById("hivSupport").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, hivSupport: true });
    }


    function directCareCo() {
        document.getElementById("directCareCo").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, directCareCo: true });
    }

    function directCareMed() {
        document.getElementById("directCareMed").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, directCareMed: true });
    }

    function directCareOther() {
        document.getElementById("directCareOther").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, directCareOther: true });
    }

    function substanceAbuse() {
        document.getElementById("substanceAbuse").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, substanceAbuse: true });
    }
    function legalAdvice() {
        document.getElementById("legalAdvice").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, legalAdvice: true });
    }

    function forensicExams() {
        document.getElementById("forensicExams").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, forensicExams: true });
    }

    function generalHealth() {
        document.getElementById("generalHealth").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, generalHealth: true });
    }

    function pregnancy() {
        document.getElementById("pregnancy").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, pregnancy: true });
    }

    function housing() {
        document.getElementById("housing").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, housing: true });
    }

    function collegeOnCampus() {
        document.getElementById("collegeOnCampus").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, collegeOnCampus: true });
    }

    function title9() {
        document.getElementById("title9").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, title9: true });
    }

    function tribal() {
        document.getElementById("tribal").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, tribal: true });
    }

    function coalition() {
        document.getElementById("coalition").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, coalition: true });
    }
    function missingPersons() {
        document.getElementById("missingPersons").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, missingPersons: true });
    }

    function lawEnforcement() {
        document.getElementById("lawEnforcement").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, lawEnforcement: true });
    }
    function std() {
        document.getElementById("std").style.backgroundColor = "rgb(166,220,220)";
        setSection3({ ...section2, std: true });
    }

    React.useEffect(() => {
        dispatch({ type: 'SET_SECTION2', payload: section3 });

    }, [section3])
    return (
        <>
        
            <h1 className="text-6xl font-serif justify-center flex mt-5">Last Step</h1>
            <span className="text-2xl font-serif justify-center flex mt-5">Resource Type</span>
            <div className="flex justify-center text-md mt-5">
                <button className=" bg-teal-400 border-2 border-teal-600 mr-1  font-serif h-20 rounded-xl p-1 w-36" id="con" onClick={confidential}>Confidential</button>
                <button className=" bg-teal-400 h-20 border-2 border-teal-700   font-serif rounded-xl p-1 w-36" id="non" onClick={nonConfidential}>Non-Confidential</button>
            </div>
            <div className="mt-1 flex justify-center text-md">
                <button className=" bg-teal-600 border-2 border-teal-600 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="health" onClick={healthCenter}>Health Center</button>
                <button className=" bg-slate-600 border-2 border-teal-700 h-20 mr-1 font-serif rounded-xl p-1 w-36" id="dv" onClick={dvProgram}>DV Program</button>

                <button className=" bg-slate-600 border-2 border-teal-600 mr-1 h-20 font-serif  rounded-xl p-1 w-36" id="psy" onClick={psychProgram}>Psych Program</button>


            </div>
            <div className="mt-1 flex justify-center text-md">
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="std" onClick={std}>STD</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="hivSupport" onClick={hivSupport}>HIV Support</button>
                <button className=" bg-yellow-800 border-2 border-teal-700 h-20 font-serif rounded-xl p-1 w-36 text-md" id="advocacy" onClick={advocacyProgram}>Advocacy Program</button>

            </div>
            <div className="mt-1 flex justify-center text-md">





                <button className="bg-slate-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="directCareCo" onClick={directCareCo}>Direct Care Co</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="directCareMed" onClick={directCareMed}>Direct Care Med</button>
                <button className="bg-yellow-800 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="legalAdvice" onClick={legalAdvice}>Legal Advice</button>
            </div>
            <div className="mt-1 flex justify-center text-xl">
                <button className="bg-yellow-800 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="forensicExams" onClick={forensicExams}>Forensic Exams</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="generalHealth" onClick={generalHealth}>General Health</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="pregnancy" onClick={pregnancy}>Pregnancy</button>
            </div>
            <div className="flex justify-center mt-1 ">
                <button className=" bg-yellow-800 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="lawEnforcement" onClick={lawEnforcement}>Law Enforcement</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="housing" onClick={housing}>Housing</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="collegeOnCampus" onClick={collegeOnCampus}>College On Campus</button>
            </div>
            <div className="flex justify-center mt-1 ">

                <button className="bg-slate-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="directCareOther" onClick={directCareOther}>Direct Care Other</button>
                <button className="bg-slate-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="substanceAbuse" onClick={substanceAbuse}>Substance Abuse</button>
                <button className=" bg-slate-600 border-2 border-slate-400 font-serif h-20 rounded-xl p-1 w-36" id="alt" onClick={altCare}>Alt. Care</button>

            </div>
            <div className="flex justify-center mt-1 ">
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="tribal" onClick={tribal}>Tribal</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="coalition" onClick={coalition}>Coalition</button>
                <button className="bg-yellow-800 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="missingPersons" onClick={missingPersons}>Missing Persons</button>
            </div>
            <div className="flex justify-center mt-1 ">

                <button className="bg-yellow-800 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="title9" onClick={title9}>Title 9</button>
            </div>
            <div>

                <span className="text-xl font-serif text-center w-fit mx-auto mb-1 bg-zinc-400 justify-center flex mt-5  ">FEW FACTS:
                </span>
                <p className="bg-[rgb(149,141,120)] font-serif text-xl p-1 text-center mx-auto w-fit
">

                    72 HOURS FOR POST EXPOSURE PROPHYLAXIS
                    120 HOURS TO RECIEVE AN EVIDENTARY EXAM
                </p>
                <div className="mt-1 flex justify-center text-2xl">



                </div>
            </div>


        </>
    )
}
export default Section3

