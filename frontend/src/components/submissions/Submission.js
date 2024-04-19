import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import * as ProviderActions from "../../store/provider.js"
import * as sectionActions from "../../store/section.js"

function Submission() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const credential = useSelector((state) => state.session.user.username)
    const submission = useSelector((state) => state.provider?.zipCode)
    const result = useSelector((state) => state.provider?.provider)
    const zipCode = useSelector((state) => state.provider?.zipCode.zipCode)
    const Name = submission.name
    const Address = submission.address
    const Phone = submission.phone
    const City = submission.city
    const State = submission.state
    const email = submission.email
    const website = submission.website
    let Approved = result.Approved || false
    const user = useSelector(state => state.session.user)
    const Users = user?.username
    const domesticViolence = result.domesticViolence || false;
    const LGBTQ = result.LGBTQ || false;
    const crisisResources = result.crisisResources || false;
    const humanTrafficking = result.humanTrafficking || false;
    const military = result.military || false;
    const Email = result.Email || "";
    const webSite = result.webSite || "";
    const lawEnforcement = result.lawEnforcement || false;
    const elderSurvivor = result.elderSurvivor || false;
    const maleSurvivor = result.maleSurvivor || false;
    const childSurvivor = result.childSurvivor || false;
    const confidential = result.confidential || false;
    const nonConfidential = result.nonConfidential || false;
    const healthCenter = result.healthCenter || false;
    const dvProgram = result.dvProgram || false;
    const psychProgram = result.psychProgram || false;
    const callpolice = result.callpolice || false;
    const advocacyProgram = result.advocacyProgram || false;
    const legalAdvice = result.legalAdvice || false;
    const forensicExams = result.forensicExams || false;
    const generalHealth = result.generalHealth || false;
    const pregnancy = result.pregnancy || false;
    const housing = result.housing || false;
    const collegeOnCampus = result.collegeOnCampus || false;
    const title9 = result.title9 || false;
    const tribal = result.tribal || false;
    const coalition = result.coalition || false;
    const std = result.std || false;
    const hivSupport = result.hivSupport || false;
    const immigrants = result.immigrants || false;
    const blindDeaf = result.blindDeaf || false;
    const disabled = result.disabled || false;
    const directCareCo = result.directCareCo || false;
    const directCareMed = result.directCareMed || false;
    const directCareOther = result.directCareOther || false;
    const substanceAbuse = result.substanceAbuse || false;
    const missingPersons = result.missingPersons || false;
    const specialNeeds = result.specialNeeds || false;
    const alternativeCare = result.alternativeCare || false;
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(ProviderActions.createProvider({
           Name, Address, City, zipCode, Phone, State, Approved, email, website,
           Users,
           Email, webSite,
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
        if (credential === "dataEntry") {

            return history(`/provider`)
        }
        history(`/user/admin/${user.id}`)

    }
    console.log(result.immigrants)

    return (
        <div className="">
            <div className=" mt-5 h-fit rounded-xl mb-2 border-2 border-slate-700 bg-teal-600 w-full mx-auto flex flex-col text-center justify-center text-2xl text-pink-50">
                Your Listing
            </div>
            <div className="border-2 h-fit border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                {<p className="text-2xl justify-center flex items-center">{Name}</p>}
                {Address && <p>Address: {Address}</p>}
                {City &&<p> " ," + " " + {City}</p>}
                {zipCode && <p>zipCode Code: {zipCode}</p>}
                {Phone && <p>Phone: {Phone}</p>}
                {website && <p>Website: {webSite}</p>}
                {email && <p>Email: {Email}</p>}
                <span className="bg-teal-600 h-1 w-full mt-5 mb-2"></span>
                <h1 className="bg-teal-600 text-pink-50 border-2 rounded p-1 w-full items-center justify-center flex border-slate-700">Expertise</h1>
                <span className="bg-teal-600 mt-2 h-1 w-full"></span>

                <span className="text-black  flex-col grid grid-cols-2
             w-full">
                    {Object.entries(result).map(([key, value]) => {
                        if (value === true) {
                            return <p key={key} className="w-fit h-fit text-center justify-around  text-teal-600 ">{key}</p>;
                        }
                        return null;
                    })}

                </span>
            </div>
            <div className="w-full flex items-center justify-center">
                <Link to="/">

                    <button className="bg-teal-600 border-2 border-slate-600 shadow-xl shadow-slate-600 rounded-xl p-1 mt-5 text-pink-50" type="submit" onClick={handleSubmit}>Submit for Approval</button>
                </Link>
            </div>
        </div>
    )
}
export default Submission