import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sectionActions from "../../store/section"
import FormatPhoneNumber from '../Phone/formatPhone';
import { Link } from "react-router-dom"
import * as providerActions from "../../store/provider"
function Admin() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const [searches, setSearches] = useState("")
    const results = useSelector((state) => state.section.section3)
    const zip = useSelector((state) => state.section.zipCode)
    const providers = useSelector((state) => state.section?.allSections)
    const res = Object.values(results)
    let data = Object.values(providers);
    let company = "hey"
    let local
    let num

    let searchData = {}
    if (providers) {
        data = Object.values(providers);
    }
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

  function Search(search) {
    if (!search) {
        return null;
    }

    // Convert search to lower case
    const lowerCaseSearch = search.toLowerCase();

    // Filter data and return an array of matching providers
 data.filter((provider) => {
        const company = provider?.Name?.toLowerCase() || '';
        const local = provider?.Address?.toLowerCase() || '';
        const num = provider?.Phone || '';

        if( provider?.zipCode === search ||
            company.includes(lowerCaseSearch) ||
            local.includes(lowerCaseSearch) ||
            num.includes(search)) {
                searchData = provider
            }

    });

    return searchData;
}


    useEffect(() => {
        dispatch(sectionActions.getAllProviders())


    }, [])
    function Delete (id) {
        console.log(id)
        dispatch(providerActions.deleteProvider(id)).then(() => dispatch(sectionActions.getAllProviders()))
    }

    return (
        <div className="xl:p-4">
            <Link to="/admin/home">
                <button className=" flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 p-2  border-2 border-gray-400  bg-teal-600 text-pink-50 justify-center rounded-2xl mt-2">Admin Home</button>
            </Link>
            <div>


                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search:"
                    className="rounded-xl mt-5 shadow-xl shadow-slate-800 h-fit w-full  border-2 border-slate-700 p-1   justify-center items-center flex bg-gray-100  lg:text-3xl  text-xl"
                />
                <div key={searchData?.id} className="border-2 border-teal-900 bg-teal-300 mt-1 xl:mt-4 md:mx-[10%] rounded-xl  p-1">
                    <button type="submit" className="" onClick={Search(search)}></button>
                    <div className="">
                        <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                            {<p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{searchData?.Name}</p>}
                            {searchData?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {searchData?.Address}</p>}
                            {searchData?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> {searchData?.zipCode}</p>}
                            {searchData?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(searchData?.Phone)}</p>}
                            {searchData.Name && (

                                <div className="flex rounded-xl flex-wrap border-2 border-slate-700 p-1 md:w-full mt-9 bg-gray-100">
                                    <h1 className="bg-teal-900  text-pink-50 border-2 rounded p-1 w-full h-5 lg:h-9  lg:text-3xl  items-center justify-center flex border-slate-700">Expertise</h1>
                                    {Object.entries(searchData).map(([key, value]) => {
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
                            )}
                        </div>
                    </div>
                </div>

                {data?.sort((a, b) => (a.Name || '').localeCompare(b.Name || '')).map((provider) => (
                    <div>
                        {provider.Approved === true &&
                            <div key={provider?.id} className="border-2 rounded-xl border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
                                <div className="">
                                    <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                                        {<p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{provider?.Name}</p>}
                                        {provider?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.Address}</p>}
                                        {provider?.City && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.City}</p>}
                                        {provider?.State && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.State}</p>}
                                        {provider?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> {provider?.zipCode}</p>}
                                        {provider?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(provider?.Phone)}</p>}

                                        <div className="flex flex-wrap border-2 rounded-xl border-slate-700 p-1 md:w-full mt-9 bg-gray-100">
                                            <h1 className="bg-teal-900  text-pink-50 border-2 rounded-xl p-1 w-full h-5 lg:h-9  lg:text-3xl  items-center justify-center flex border-slate-700">Expertise</h1>
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
                                                    <button className="text-2xl text-slate-800 rounded-xl p-1 mt-2 border-2 border-slate-600 shadow-sm shadow-slate-500 bg-red-500" onClick={()=>Delete(provider.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Admin