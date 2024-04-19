import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sectionActions from '../../store/section'
import FormatPhoneNumber from '../Phone/formatPhone';
function Results() {
    const dispatch = useDispatch()
    const results = useSelector((state) => state.section.section2)
    const providers = useSelector((state) => state.provider?.providers)
    let data 
    let final
    const [provider, setProviders] = useState([]);
    if (providers) {
        data = Object.values(providers);
    }
console.log(final)
    const displayNameMapping = {
        callPolice: 'Law Enforcement',
        advocacyProgram: 'Advocacy',
        psychProgram: 'Psychology',
        forensicExams: 'Forensic Exam',
        pregnancy: 'Pregnancy',
        std: 'STD/HIV',
        hivSupport: 'HIV support',
        blindDeaf: 'Blind/Deaf',
        collegeOnCampus: 'College',
        generalHealth: 'Healthcare',
        immigrants: 'Immigrants',
        disabled: 'Disability',
        title9: 'Title 9',
        alternativeCare: 'Alt. Care',
        elderSurvivor: 'Elderly Victims',
        childSurvivor: 'Child Victims',
        military: 'Military',
        humanTrafficking: 'Human Trafficking',
        LGBTQ: 'LGBTQ',
        domesticViolence: 'Domestic Violence',
        crisisResources: 'Crisis Resources',
        lawEnforcement: 'Law Enforcement',
        confidential: 'Confidential',
        nonConfidential: 'Non-Confidential',
        healthCenter: 'Health Center',
        dvProgram: 'DV Program',
        callpolice: 'Police',
        legalAdvice: 'Legal Advice',
        directCareCo: 'Direct Care Counseling',
        directCareMed: 'Direct Care Medical',
        directCareOther: 'Direct Care Other',
        substanceAbuse: 'Substance Abuse',
        missingPersons: 'Missing Persons',
        specialNeeds: 'Special Needs',
        housing: 'Housing',
        tribal: 'Tribal',
        coalition: 'Coalition'

    }
    function countCommonPairs(obj1, obj2) {
  let count = 0;
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      count++;
    }
  }
  return count;
}
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // dispatch(sectionActions.getAllProviders())
   dispatch(sectionActions.getProviders(results))
        window.scrollTo(-20, -20);

    }, [results])

    return (
        <div className="xl:p-4">

            <div>

                <div className=" mt-5 h-fit rounded-xl mb-2 border-2 lg:text-5xl border-slate-700 bg-teal-600 w-full mx-auto flex flex-col text-center justify-center text-2xl text-pink-50">
                    Your results

                </div>
               {/* { providers.sort((a, b) => countCommonPairs(results, a) - countCommonPairs(results, b)).map(provider => { */}

                {providers?.map((provider) => (
                    <div key={provider?.id}>
                        {provider.Approved === true &&
                            <div className="border-2 border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
                                <div className="">
                                    <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                                        {<p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{provider?.Name}</p>}
                                        {provider?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.Address}</p>}
                                        {provider?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> {provider?.zipCode}</p>}
                                        {provider?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(provider?.Phone)}</p>}
                                        {provider?.Email && <p className="font-semibold text-xl">Email: {provider?.Email}</p>}

                                        <div className="flex flex-wrap border-2 border-slate-700 p-1 md:w-full mt-9 bg-gray-100">
                                            <h1 className="bg-teal-900  text-pink-50 border-2 rounded p-1 w-full h-5 lg:h-9  lg:text-3xl  items-center justify-center flex border-slate-700">Expertise</h1>
                                            {Object.entries(provider).map(([key, value]) => {
                                                // If the value is true, display the key
                                                if (value === true && key !== "Approved") {

                                                    return (
                                                        <div className="flex flex-col w-1/2  mt-1  md:text-3xl text-lg text-center justify-center items-center   " key={key}>{displayNameMapping[key] || key}
                                                            <span className=" bg-black"></span>
                                                        </div>
                                                    )




                                                } else {
                                                    return null;
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                    </div>
                ))}
{/* })}; */}
            </div>
        </div>
    )
}
export default Results