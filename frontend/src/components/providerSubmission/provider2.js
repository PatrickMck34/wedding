import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Provider2() {
    const dispatch = useDispatch()
    const [provider2, setprovider2] = React.useState({
    });

    function updateprovider2(key) {
        document.getElementById(key).style.backgroundColor = "rgb(166,220,220)";
        setprovider2({ ...provider2, [key]: true });
    }
    useEffect(() => {
        dispatch({ type: 'SET_PROVIDER', payload: provider2 });

    }, [provider2])
    return (
        <div className="text-lg ">
            <h1 className="text-5xl justify-center font-serif  flex mt-5">Second Step</h1>
            <div className="flex justify-center mt-5">

                <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="LGBTQ" onClick={() => updateprovider2("LGBTQ")}>LGBTQ</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="blindDeaf" onClick={() => updateprovider2("blindDeaf")}>Blind/Deaf</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="disabled" onClick={() => updateprovider2("disabled")}>Disabled</button>

            </div>

            <div className="mt-1 flex justify-center">
                <button className=" bg-teal-600 border-2 border-slate-400 -700 shadow-md shadow-slate-400 font-serif mr-1 h-20 rounded-xl p-1 w-36" id="military" onClick={() => updateprovider2("military")}>Military</button>
                <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="childSurvivor" onClick={() => updateprovider2("childSurvivor")}>Child Survivor</button>
                <button className=" bg-teal-600 shadow-md border-2 border-teal-700  shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="elderSurvivor" onClick={() => updateprovider2("elderSurvivor")}>Elder Survivor</button>

            </div>
            <div className="mt-1 flex justify-center">
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="specialNeeds" onClick={() => updateprovider2("specialNeeds")}>Special Needs</button>

                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="immigrants" onClick={() => updateprovider2("immigrants")}>Immigrants</button>

                <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 font-serif   rounded-xl p-1  w-36" id="domesticViolence" onClick={() => updateprovider2("domesticViolence")}>Domestic Violence</button>
            </div>
            <div className="flex justify-center mt-1 ">
                <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="humanTrafficking" onClick={() => updateprovider2("humanTrafficking")}>Human Trafficking</button>
                <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="allResources" onClick={() => updateprovider2("allResources")}>All Resources</button>
                <button className=" bg-teal-600 border-2 border-slate-400 shadow-md shadow-slate-400 font-serif mr-1 rounded-xl p-1  h-20 w-36" id="crisisResources" onClick={() => updateprovider2("crisisResources")}>Crisis Resources</button>
            </div>

        </div>
    )
}
export default Provider2