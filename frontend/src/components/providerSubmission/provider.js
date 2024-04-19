
import React, { useEffect } from 'react'

import { useState } from "react"

import { useDispatch } from 'react-redux'

function Provider() {

  const dispatch = useDispatch()
  const [zipCode, setZipCode] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email  , setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isProviderValid, setIsProviderValid] = useState(false);
  function handleNextSection() {
    const isValid = address !== '' && phone !== '' && name !== '' && zipCode !== '';

    if (isValid) {
      setIsProviderValid(true);
    } else {
      alert('Please fill in all fields before moving to the next section.');
    }
  }

  useEffect(() => {
    dispatch({ type: 'SET_ZIP', payload: { email: email, website: website, zipCode: zipCode, address: address, city: city, state: state, phone: phone, name: name } })

  }, [zipCode, name, address, phone])
  return (
    <>
      <div className="flex w-full  scroll-auto flex-col ">
        <h1 className="text-6xl font-serif justify-center flex mt-5">First Step</h1>
        <div className="flex items-center justify-center flex-col ">



          <form className="flex flex-col">

            <div className="bg-teal-600 flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 h-24 w-60 text-2xl p-1 justify-center rounded-2xl mt-2">
              <span>Name</span>
              <input required className="w-36 text-sm p-2  mt-1 border-2 h-8 border-gray-400 " type="text" value={name} placeHolder="Name of Company" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="bg-teal-600 text-center flex flex-col items-center font-serif shadow-md shadow-slate-400  w-60 text-2xl p-1 justify-center rounded-2xl mt-2">

              <span>Address</span>
              <input required className="w-36  p-2 text-sm mt-1 border-2 h-8 border-gray-400 " type="address" value={address} placeHolder="Street Address" onChange={(e) => setAddress(e.target.value)} />
              <input required className="w-36  p-2 text-sm mt-1 border-2 h-8 border-gray-400 " type="address" value={city} placeHolder="City" onChange={(e) => setCity(e.target.value)} />
              <input required className="w-36  p-2 text-sm mt-1 border-2 h-8 border-gray-400 " type="address" value={state} placeHolder="State" onChange={(e) => setState(e.target.value)} />
            </div>
            <div className="bg-teal-600 flex  flex-col items-center text-center font-serif shadow-md shadow-slate-400 h-24 w-60 text-2xl p-1 justify-center rounded-2xl mt-2">
              <span>Phone</span>
              <input required className="w-36 text-sm p-2  mt-1 border-2 h-8 border-gray-400 " type="phone" value={phone}
                placeHolder="10-digit Phone#" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="bg-teal-600 flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 h-24 w-60 text-2xl p-1 justify-center rounded-2xl mt-2">
              <span>Zipcode</span>
              <input required type="text" placeHolder="Zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-36 text-sm p-2  mt-1 border-2 h-8 border-gray-400 " />
            </div>
            <div className="bg-teal-600 flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 h-24 w-60 text-2xl p-1 justify-center rounded-2xl mt-2">
              <span>Email</span>
              <input required type="text" placeHolder="Zipcode" value={email} onChange={(e) => setEmail(e.target.value)} className="w-36 text-sm p-2  mt-1 border-2 h-8 border-gray-400 " />
            </div>
            <div className="bg-teal-600 flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 h-24 w-60 text-2xl p-1 justify-center rounded-2xl mt-2">
              <span>Website</span>
              <input required type="text" placeHolder="Zipcode" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-36 text-sm p-2  mt-1 border-2 h-8 border-gray-400 " />
            </div>
          </form>


        </div>
      </div>
    </>
  )
}
export default Provider
