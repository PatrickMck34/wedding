import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import * as sectionActions from "../../store/section.js"
import FormatPhoneNumber from '../Phone/formatPhone';
function UserAdmin() {
  const dispatch = useDispatch()
  const submission = useSelector((state) => state.provider?.providers)
  const zip = useSelector((state) => state.provider[1]?.zipCode)
  const name = useSelector((state) => state.provider?.name)
  const address = useSelector((state) => state.provider?.address)
  const phone = useSelector((state) => state.provider?.phone)
  const providers = useSelector((state) => state.section?.allSections)
  const user = useSelector(state => state.session?.user)
  let data = Object.values(submission);

  useEffect(() => {
    dispatch(sectionActions.getProviders(user.id))

}, [])
  return (
    <div className="">
      <div className=" mt-5 h-fit rounded-xl mb-2 border-2 border-slate-700 bg-teal-600 w-full mx-auto flex flex-col text-center justify-center text-2xl text-pink-50">
        Approved
       {data?.map((provider) => (
        <div>

      {provider.Approved === true && provider.Users === user.username &&
                            <div key={provider?.id} className="border-2 rounded-xl border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
                                <div className="">
                                    <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                                        {<p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{provider?.Name}</p>}
                                        {provider?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.Address}</p>}
                                        {provider?.City && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.City}</p>}
                                        {provider?.State && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.State}</p>}
                                        {provider?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> {provider?.zipCode}</p>}
                                        {provider?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(provider?.Phone)}</p>}
                                        </div>
                                        </div>
      
                                        </div>
      
      
}</div>
      ))}
      </div>
      <div className="border-2 h-fit border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
        {<p className="text-2xl justify-center flex items-center">{submission.name}</p>}
        {address && <p>Address: {submission.address}</p>}
        {zip && <p>Zip Code: {submission.zip}</p>}
     
        <h1 className="bg-teal-600 text-pink-50 border-2 rounded p-1 w-full items-center justify-center flex border-slate-700">Expertise</h1>
    

        <span className="text-black  flex-col grid grid-cols-2
     w-full">
          {Object.entries(providers).map(([key, value]) => {
            if (value === true) {
              return <p key={key} className="w-fit h-fit text-center justify-around  text-teal-600 ">{key}</p>;
            }
            return null;
          })}

        </span>
      </div>
      <div className="w-full flex items-center justify-center">

      </div>
      <div className=" mt-9 h-fit rounded-xl mb-2 border-2 border-slate-700 bg-teal-600 w-full mx-auto flex flex-col text-center justify-center text-2xl text-pink-50 ">
        Pending Approval
        
      </div>
      {data?.map((provider) => (
        <div>

      {provider.Approved === false && provider.Users === user.username &&
                            <div key={provider?.id} className="border-2 rounded-xl border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
                                <div className="">
                                    <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
                                        {<p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{provider?.Name}</p>}
                                        {provider?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.Address}</p>}
                                        {provider?.City && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.City}</p>}
                                        {provider?.State && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.State}</p>}
                                        {provider?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> {provider?.zipCode}</p>}
                                        {provider?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(provider?.Phone)}</p>}
                                        </div>
                                        </div>
      
                                        </div>
      
      
}</div>
      ))}
      <div className="border-2 h-fit border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
        {<p className="text-2xl justify-center flex items-center">{name}</p>}
        {address && <p>Address: {submission.address}</p>}
        {zip && <p>Zip Code: {zip}</p>}
     
        <h1 className="bg-teal-600 text-pink-50 border-2 rounded p-1 w-full items-center justify-center flex border-slate-700">Expertise</h1>
      

        <span className="text-black  flex-col grid grid-cols-2
     w-full">
          {Object.entries(submission).map(([key, value]) => {
            if (value === true) {
              return <p key={key} className="w-fit h-fit text-center justify-around  text-teal-600 ">{key}</p>;
            }
            return null;
          })}

        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link to="/">

          <button className="bg-teal-600 border-2 border-slate-600 shadow-md shadow-slate-600 rounded-xl p-1 mt-5 text-pink-50">Go Back</button>
        </Link>
        <Link to="/provider">

        <button className="bg-teal-600 border-2 border-slate-600 shadow-md shadow-slate-600 rounded-xl p-1 mt-5 ml-5 text-pink-50">Submit A Provider</button>
        </Link>
      </div>
    </div>

  )
}
export default UserAdmin;