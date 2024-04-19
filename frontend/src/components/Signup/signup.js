import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"

import * as sessionActions from "../../store/session";

function Signup() {
	const dispatch = useDispatch();
	const history = useNavigate()
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const user = useSelector(state => state.session?.user?.id)

	const handleSubmit  = async (e) => {
		e.preventDefault();
		setErrors([]);
		const newUser = await dispatch(sessionActions.signup({ username, email, password }));
		if (newUser) {
		  history(`/user/admin/${user}`);
		}
	  };
React.useEffect(() => {
	dispatch(sessionActions.restoreUser())
}, [user])

	return (
		<>

			<div className=" w-full flex items-center justify-center">

				<img src="https://i.ibb.co/sJ7MhrR/Land.png" alt="Loading Logo" className="h-48 " />
			</div>
			<h1 className="text-4xl mb-1 w-full flex items-center justify-center mt-4">Join Our List!</h1>
			<span className="text-sm md:text-lg text-center justify-center items-center w-full flex">Join our list of resources and have your company displayed in our search results!</span>
			<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center text-center rounded-xl border-2 border-slate-600 p-[.5px] bg-gray-200 mt-4 mx-auto md:w-[80%]">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>

				<div className="flex flex-col mt-3 bg-teal-400 h-fit p-3 rounded-xl shadow-md shadow-slate-400 border-2 border-slate-800 ">

					<label className="bg-teal-600 mb-1 text-left rounded-xl p-1 text-pink-50 ">
						Email
						<input className=" text-black border-2 ml-12 border-slate-700 "
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label className=" bg-teal-600 mb-1 text-left rounded-xl p-1 text-pink-50 ">
						Username
						<input className="  text-black border-2 ml-4 border-slate-700"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</label>
					<label className="bg-teal-600 text-left mb-1  rounded-xl p-1 text-pink-50 ">
						Password
						<input className="text-black  border-2 ml-5 border-slate-700"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label >
					<label className="bg-teal-600 text-left rounded-xl p-1 text-pink-50 ">
						Confirm
						<input className=" text-black border-2 ml-7 border-slate-700"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</label>
				</div>

				<button type="submit" className="bg-[rgb(221,163,112)] rounded-xl p-1 border-2 border-amber-800 mt-2 w-36">Register</button>

			</form>
		</>
	);
}

export default Signup;