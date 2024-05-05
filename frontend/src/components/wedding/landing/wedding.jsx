import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import couple from "../../../resources/couple.jpg";
import Header from "../header/header";
import bouquet from "../../../resources/bouquet.jpg";
import people from "../../../resources/people.jpg";
import Footer from "../../footers/footer"; 
import noMad from "../../../resources/noMad.jpeg";
import staticmap from "../../../resources/staticmap.png";
import * as providerActions from "../../../store/provider";
import * as sectionActions from "../../../store/section";


function Landing() {
  const dispatch = useDispatch();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Party, setGuestName] = useState("");
  const [Attendance, setAttendance] = useState(false);
  const [Guests, setGuests] = useState("");
  const [Meal, setMeal] = useState("");
  const [Allergies, setAllergies] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [Table, setTable] = useState("");

  const allS = useSelector(state => state.section.allSections);
  const allSections = Object.values(allS)
  const tableNumbers = allSections.map(section => section.Table);
  const [remainder, setRemainder] = useState("")
  const remainders =  allSections.map(section => section.remainder);
  const [sub, setSub] = useState(false)
  function assignSeats(){
//set up table seed data
    
    let tables = [
      { number: "1", seats: 4 },
      { number: "2", seats: 2 },
      { number: "3", seats: 3 },
      { number: "4", seats: 2 },
      { number: "5", seats: 1 },
      { number: "6", seats: 2},
      { number: "7", seats: 14 },
      { number: "8", seats: 6 },
      { number: "9", seats: 4 },
      { number: "10", seats: 10 },
      { number: "11", seats: 4 },
      { number: "12", seats: 6 },
      { number: "13", seats: 4 },
      { number: "14", seats: 6 },
      { number: "15", seats: 4 },
      { number: "16", seats: 10 },
      { number: "17", seats: 4 },
      { number: "18", seats: 6 },
      { number: "19", seats: 4 },
      { number: "20", seats: 6 },
      { number: "21", seats: 4 },
      { number: "22", seats: 22 },
      { number: "23", seats: 50 },
      { number: "24", seats: 6 },
      { number: "25", seats: 10 },
      { number: "26", seats: 6 },
      { number: "27", seats: 19 },
      { number: "28", seats: 6 },
      { number: "29", seats: 8 },
      { number: "30", seats: 6 },
  ];
  //filter through tables that have not been assigned
  tables = tables.filter(table => !tableNumbers.includes(table.number));
  allSections.map((section)=>{

    //check for tables with empty seats if party can fill them without breaking a party
    if (Guests <= section.remainder) {
      setTable(section.Table)
      setRemainder(section.remainder - Guests)
      setAttendance(true)
      return
    }else {

      for (let table of tables) {
        let availableSeats = table.seats;
        if(Guests <= availableSeats){
          setTable(table.number)
          setRemainder(availableSeats - Guests)
          setAttendance(true)
        }
      }
      return
    }})

          
         
         
         
         
  
}
  const handleSubmit=(e)=> {
    e.preventDefault();
      
    setSub(true)
  dispatch(providerActions.createProvider({Party, Table, Guests, remainder})).then(()=>dispatch(sectionActions.getAllProviders()))
}
    useEffect(() => {
      dispatch(sectionActions.getAllProviders());
    },[])
  
    
  return (
    <div className="flex flex-col justify-center items-center border-2 border-black ">
<Footer /> <div className=" w-[45%] mt-3 rounded-xl bg-blue-100/50 flex flex-col justify-center items-center border-2 border-black p-2 shadow-md shadow-slate-600">


      <span className="mt-8 text-4xl font-serif">
        Who should we expect?
        </span>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row  justify-center ">
        <label className="flex flex-col text-sm ">First Name
        <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="" className=" mr-5 border-2 border-slate-500 rounded shadow-sm shadow-slate-300"/>
        </label>
        <label className="flex flex-col text-sm ">Last Name
        <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="" className="border-2 border-slate-500 rounded shadow-sm shadow-slate-300" />
        </label>

        </div>
        <div className="justify-center flex mt-2">
        <label className="flex flex-col text-sm ">
        <label className="flex flex-col text-sm "> Number of Guests
        <input type="number" value={Guests} onChange={(e) => setGuests(e.target.value)} placeholder="" className="border-2 border-slate-500 rounded shadow-sm shadow-slate-300" />
        </label>
          Party Name

          <textarea className="border-2 border-slate-500 rounded shadow-sm shadow-slate-300" value={Party} onChange={(e) => setGuestName(e.target.value)}></textarea>
          </label>
        </div>
        <span className="mt-8 text-2xl font-sans flex justify-center">
        
        <div className="flex justify-center flex-col font-serif">
       <span className="text-4xl">

         Can you make it?
        </span>
        <div className="flex justify-center flex-col font-serif items-center">

        <label>
        <input type="radio" value="Joyfully accepts" name="attendance" className="mt-8 mb-4 ml-[-11%]" /> Joyfully Accepts
      </label>
      <label>
        <input type="radio" value="Regretfully declines" name="attendance" /> Regretfully Declines
      </label>
        </div>
        </div>
        </span>

     
 
     
      <span className="mt-6 flex text-4xl justify-center mb-5 font-serif ">Meal Selection</span>
      <div className="flex flex-col">

      <label>
        Beef
        <input type="text" name="meal" className="ml-[8em] border-2 border-slate-500 rounded shadow-sm shadow-slate-300" /> 
      </label>
      <label>
        Fish
        <input type="text" name="meal" className="ml-[8.25em] mt-3 border-2 border-slate-500 rounded shadow-sm shadow-slate-300" /> 
      </label>
      <label>
        Vegetarian
        <input type="text"  name="meal" className="ml-[5.25em] mt-3 border-2 border-slate-500 rounded shadow-sm shadow-slate-300"/> 
      </label>
    
      </div>
      <div className="flex flex-row mt-5">

      <label className="absolute mt-8">Do you have any food allergies?
      </label>
        <textarea name="allergies" className="mt-6 ml-[11em] border-2 border-slate-500 rounded shadow-sm shadow-slate-300"></textarea>
      </div>
  
      {Attendance && <div className="flex flex-col justify-center items-center">
      
          <div className="text-2xl font-semibold p-1 mt-2">
            {Party} will be seated at table {Table}
        
          
          
            </div>
        </div>
        }
        {!Attendance &&  <div className="flex flex-col">
        <button  className="rounded-xl mt-9 flex ml-36 bg-gray-200 border-2 border-slate-600 p-[2px] shadow-sm w-24 justify-center shadow-slate-700"  onClick={assignSeats}>Get Table</button>
      </div>
}
        {Attendance && !sub && <div className="flex flex-col">  
        <button type="submit" className="rounded-xl mt-9 flex ml-36 bg-gray-200 border-2 border-slate-600 p-[2px] shadow-sm w-24 justify-center shadow-slate-700"  onClick={handleSubmit}>Submit</button>
     </div>
}
    {sub && <div className="flex flex-col justify-center items-center text-3xl">
    Thank you for your RSVP!
    </div>
        }
    </form>
     
</div>
        <div className="border-2 border-black absolute h-[100vh] mt-[-1.9%] bg-blue-100/50 rounded-xl w-[21em] ml-[76%] p-[3px] items-center justify-center ">
          <div className="flex flex-col justify-center">

      <span className="font-serif text-3xl ml-[4em]">Venue</span>
      <img src={noMad} className="ml-5 mt-3 h-56 w-72 border-2 mb-5 border-slate-900 rounded-xl shadow-sm shadow-slate-700"/>
      <span className="font-serif text-2xl ml-[3em] ">
      The NoMad London
      </span>
      <span className="font-serif  ml-[4em] ">
      
      28 Bow St WC2E 7AW London
      </span>
          </div>
          <img src={staticmap} className="ml-5 mt-3 h-56 w-72 border-2 mb-5 border-slate-900 rounded-xl shadow-sm shadow-slate-700"/>
        </div>
    <img src={bouquet} className="absolute h-56  mr-[76%] mt-[35%] shadow-sm shadow-slate-700 border-2 border-slate-900 rounded-xl"/>
<img src={couple} className="absolute h-56 mr-[76%] mt-[-32.1%] border-2 border-slate-900 rounded-xl shadow-sm shadow-slate-700 "/>
<img src={people} className="absolute h-56 mr-[76%] mt-5 border-2 border-slate-900 rounded-xl shadow-sm shadow-slate-700 "/>

<Header />
    </div>
  );
}
export default Landing;