import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sectionActions from "../../store/section"

import FormatPhoneNumber from '../Phone/formatPhone';
import { Link } from "react-router-dom"
import * as providerActions from "../../store/provider"

function AdminApprovals() {
    const [isDenyClicked, setIsDenyClicked] = useState(false);
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const [searches, setSearches] = useState("")
    const results = useSelector((state) => state.section.section3)
    const zip = useSelector((state) => state.section.zipCode)
    const providers = useSelector((state) => state.section?.allSections)
    const res = Object.values(results)
    let data
    let company = "hey"
    let local
    let num
    let searchData = {}
    if (providers) {
        data = Object.values(providers);
    }
    function Approve(provider) {
        provider.Approved = true
        const id = provider.id
        const Name = provider.Name
        const Address = provider.Address
        const City = provider.City
        const zipCode = provider.zipCode
        const Phone = provider.Phone
        const State = provider.State
        const Approved = provider.Approved
        const domesticViolence = provider.domesticViolence || false;
        const LGBTQ = provider.LGBTQ || false;
        const crisisResources = provider.crisisResources || false;
        const humanTrafficking = provider.humanTrafficking || false;
        const military = provider.military || false;
        const lawEnforcement = provider.lawEnforcement || false;
        const elderSurvivor = provider.elderSurvivor || false;
        const maleSurvivor = provider.maleSurvivor || false;
        const childSurvivor = provider.childSurvivor || false;
        const confidential = provider.confidential || false;
        const nonConfidential = provider.nonConfidential || false;
        const healthCenter = provider.healthCenter || false;
        const dvProgram = provider.dvProgram || false;
        const psychProgram = provider.psychProgram || false;
        const callpolice = provider.callpolice || false;
        const advocacyProgram = provider.advocacyProgram || false;
        const legalAdvice = provider.legalAdvice || false;
        const forensicExams = provider.forensicExams || false;
        const generalHealth = provider.generalHealth || false;
        const pregnancy = provider.pregnancy || false;
        const housing = provider.housing || false;
        const collegeOnCampus = provider.collegeOnCampus || false;
        const title9 = provider.title9 || false;
        const tribal = provider.tribal || false;
        const coalition = provider.coalition || false;
        const std = provider.std || false;
        const hivSupport = provider.hivSupport || false;
        const immigrants = provider.immigrants || false;
        const blindDeaf = provider.blindDeaf || false;
        const disabled = provider.disabled || false;
        const directCareCo = provider.directCareCo || false;
        const directCareMed = provider.directCareMed || false;
        const directCareOther = provider.directCareOther || false;
        const substanceAbuse = provider.substanceAbuse || false;
        const missingPersons = provider.missingPersons || false;
        const specialNeeds = provider.specialNeeds || false;
        const alternativeCare = provider.alternativeCare || false;
        console.log(Name)
        dispatch(providerActions.updateProvider({
            id, Name, Address, City, zipCode, Phone, State, Approved,
            domesticViolence,
            LGBTQ,
            crisisResources,
            humanTrafficking,
            military,
            lawEnforcement,
            elderSurvivor,
            maleSurvivor,
            childSurvivor,
            confidential,
            nonConfidential,
            healthCenter,
            dvProgram,
            psychProgram,
            callpolice,
            advocacyProgram,
            legalAdvice,
            forensicExams,
            generalHealth,
            pregnancy,
            housing,
            collegeOnCampus,
            title9,
            tribal,
            coalition,
            std,
            hivSupport,
            immigrants,
            blindDeaf,
            disabled,
            directCareCo,
            directCareMed,
            directCareOther,
            substanceAbuse,
            missingPersons,
            specialNeeds,
            alternativeCare
        })).then(() => dispatch(sectionActions.getAllProviders()))

    }
    function Deny(provider) {
        setIsDenyClicked(true);
        // const pro = { ...provider, Approved: false, Message: message };
        // dispatch(providerActions.updateProvider(pro));
    }
    function Deny2(provider, message) {
        setIsDenyClicked(true);
        const pro = { ...provider, Approved: false, Message: message };
        dispatch(providerActions.updateProvider(pro));
    }
    //Rewrite variable names so they are more descriptive when displayed on the front end
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
    //Search function for admin page
    function Search(search) {
        if (search === "") {
            return null
        }
        //search through listings and check if the search matches any of the fields
        data.filter((provider) => {
            company = provider?.Name.toLowerCase()
            local = provider?.Address.toLowerCase()
            num = provider?.Phone
            if (provider?.zipCode === search) {
                searchData = provider
            } else if (company.includes(search.toLowerCase())) {
                searchData = provider
            } else if (local.includes(search.toLowerCase())) {
                searchData = provider
            } else if (num.includes(search)) {
                searchData = provider

            } else if (provider?.zipCode === search) {
                searchData = provider
            }


        })
    }


    useEffect(() => {
        dispatch(sectionActions.getAllProviders())


    }, [])

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
                    className="rounded-xl mt-5 h-fit w-full  border-2 border-slate-700 p-1   justify-center items-center flex bg-gray-100  lg:text-3xl  text-xl"
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
                                        if (value === true) {

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

                {data?.map((provider) => (
                    <div>
                        {provider.Approved === false &&
                            <div key={provider?.id} className="border-2 rounded-xl border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
                                <div className="">
                                    <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                                        {<p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{provider?.Name}</p>}
                                        {provider?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.Address}</p>}
                                        {provider?.City && <p className="font-semibold lg:text-2xl text-center mb-1 "> {provider?.City + ", " + provider?.State}</p>}

                                        {provider?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> {provider?.zipCode}</p>}
                                        {provider?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(provider?.Phone)}</p>}
                                        <div className="flex flex-row justify-between mt-3 items-center ">

                                            <button className="text-2xl text-black bg-green-400 rounded-xl mr-4 p-1 border-2 border-slate-700 shadow-sm shadow-slate-400" onClick={() => Approve(provider)}> Approve </button>
                                            {isDenyClicked && (
                                                <div>

                                                    <input
                                                        type="text"
                                                        value={message}
                                                        onChange={e => setMessage(e.target.value)}
                                                        placeholder="Type your message here"
                                                    />
                                                    <button className="text-2xl text-black bg-red-400 p-1 ml-6 rounded-xl border-2 border-slate-700 shadow-sm shadow-slate-400" onClick={() => Deny(provider, message)}> Deny</button>
                                                </div>
                                            )}
                                            {!isDenyClicked && (

                                                <button className="text-2xl text-black bg-red-400 p-1 ml-6 rounded-xl border-2 border-slate-700 shadow-sm shadow-slate-400" onClick={() => Deny(provider)}>Deny</button>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap border-2 rounded-xl border-slate-700 p-1 md:w-full mt-9 bg-gray-100">
                                            <h1 className="bg-teal-900  text-pink-50 border-2 rounded-xl p-1 w-full h-5 lg:h-9  lg:text-3xl  items-center justify-center flex border-slate-700">Expertise</h1>
                                            {Object.entries(provider).map(([key, value]) => {
                                                // If the value is true, display the key
                                                if (value === true) {

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
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AdminApprovals