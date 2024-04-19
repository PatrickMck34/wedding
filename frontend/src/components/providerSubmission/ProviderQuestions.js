import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { CSSTransition } from 'react-transition-group';
import Provider2 from './provider2.js';
import Provider from './provider.js';
import Provider3 from './provider3.js';
import Categories from '../categoriesPage/categoriesPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import * as ProvidersActions from "../../store/provider.js"

import { ProviderInfoContext } from '../context/context.jsx';



function ProviderQuestions() {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [errors, setErrors] = React.useState(["Please fill out required fields"]);
  const [currentSection, setCurrentSection] = React.useState(1);
  const Name = useSelector(state => state.provider?.name)
  const Address = useSelector(state => state.provider?.zipCode?.address)
  const Phone = useSelector(state => state.provider?.zipCode?.phone)
  const ZipCode = useSelector(state => state.provider?.zipCode)

  const provider1 = useSelector(state => state.provider?.provider);

  
  const [info, setInfo] = React.useState({
    Name: "",
    Address: "",
    City: "",
    State: "",
    Phone: "",
    zipCode: "",
    Approved: false,
    domesticViolence: false,
    LGBTQ: false,
    crisisResources: false,
    humanTrafficking: false,
    military: false,
    lawEnforcement: false,
    elderSurvivor: false,
    childSurvivor: false,
    confidential: false,
    nonConfidential: false,
    healthCenter: false,
    dvProgram: false,
    psychProgram: false,
    callpolice: false,
    advocacyProgram: false,
    legalAdvice: false,
    forensicExams: false,
    generalHealth: false,
    pregnancy: false,
    housing: false,
    collegeOnCampus: false,
    title9: false,
    tribal: false,
    coalition: false,
    std: false,
    hivSupport: false,
    immigrants: false,
    blindDeaf: false,
    disabled: false,
    directCareCo: false,
    directCareMed: false,
    directCareOther: false,
    substanceAbuse: false,
    missingPersons: false,
    specialNeeds: false,
    alternativeCare: false,
  });


  const Trans = () => {
    setErrors([])
    if (Address !== '' && Phone !== '' && Name !== '' && ZipCode !== '' && Phone.length === 10 && ZipCode.length === 5) {
    setCurrentSection(currentSection + 1);




  };}

  const Results = () => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = { ...{ provider1 }, ...{ ZipCode } }
    // dispatch(createProvider({provider1}))
    //   LGBTQ,
    //   crisisResources,
    //   humanTrafficking,
    //   military,
    //   lawEnforcement,
    //   elderSurvivor,
    //   childSurvivor,
    //   confidential,
    //   nonConfidential,
    //   healthCenter,
    //   dvProgram,
    //   psychProgram,
    //   callpolice,
    //   advocacyProgram,
    //   legalAdvice,
    //   forensicExams,
    //   generalHealth,
    //   pregnancy,
    //   housing,
    //   collegeOnCampus,
    //   title9,
    //   tribal,
    //   coalition,
    //   std,
    //   hivSupport,
    //   immigrants,
    //   blindDeaf,
    //   disabled,
    //   directCareCo,
    //   directCareMed,
    //   directCareOther,
    //   substanceAbuse,
    //   missingPersons,
    //   specialNeeds,
    //   alternativeCare}))

    history('/provider/list')
  }
  useEffect(() => {
    setErrors([errors])
  }, [])

  React.useEffect(() => {
    if (errors.length > 0) {
      dispatch(ProvidersActions.getProvider())
    }
  }, [])
  return (
    <ProviderInfoContext.Provider value={info}>
      <div >

        <div className="relative overflow-hidden h-full w-full">
          <CSSTransition
            in={currentSection === 1}
            timeout={100}
            classNames="slide"
            unmountOnExit
          >
            <Provider setInfo={info} />
          </CSSTransition>
          <CSSTransition
            in={currentSection === 2}
            timeout={200}
            classNames="slide"
            unmountOnExit
          >
            <Categories setInfo={info} />
          </CSSTransition>

          <CSSTransition
            in={currentSection === 3}
            timeout={200}
            classNames="slide"
            unmountOnExit
          >
            <Provider2 setInfo={info} />
          </CSSTransition>

          <CSSTransition
            in={currentSection === 4}
            timeout={100}
            classNames="slide"
            unmountOnExit
          >
            <Provider3 setInfo={info} />
          </CSSTransition>
        </div>
        {currentSection === 3 ? (
          <div>
            <Link to="/provider/list">
              <button type="Submit" onClick={handleSubmit} className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl ">Results</button>
            </Link>
          </div>
        ) : (
          <div>
            <button onClick={Trans} className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl">Next</button>
          </div>
        )}

      </div>
    </ProviderInfoContext.Provider>
  );
}


export default ProviderQuestions