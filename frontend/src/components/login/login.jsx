import React, { useState, useEffect } from 'react';
import { useDispatch, } from "react-redux";
import { useNavigate, Link } from "react-router-dom"

import * as sessionActions from "../../store/session";
function Login() {
	const dispatch = useDispatch();
	const history = useNavigate()
	const [email, setEmail] = useState("");
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const userId = 1

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		if (credential === "admin") {
			return dispatch(sessionActions.login({ credential, password })).then(() =>
				history(`/admin/home`))
		}
		if (credential === "dataEntry") {
			return dispatch(sessionActions.login({ credential, password })).then(() =>
				history(`/provider`))
		}
		dispatch(sessionActions.login({ credential, password })).then(() =>
			history(`/user/admin/${userId}`))

			.catch(async (res) => {
				const data = await res.json()
				if (data && data.errors) setErrors(data.errors);






			});
	};

	return (
		<>
			<div className=" w-full flex items-center justify-center">

				<img src="https://i.ibb.co/sJ7MhrR/Land.png" alt="Loading Logo" className=" " />
			</div>
			<h1 className="text-4xl mb-1 w-full flex items-center justify-center mt-4">Welcome Back</h1>
			<span className="text-sm md:text-lg text-center justify-center items-center w-full flex">Please Login Below </span>
			<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center text-center rounded border-2 border-slate-600 p-[.5px] bg-gray-200 shadow-md shadow-slate-400 mt-4 mx-auto md:w-[60%]">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<div className="flex flex-col mt-3 bg-teal-400 h-fit p-3 rounded-xl shadow-md shadow-slate-400 border-2 border-slate-800 ">


					<label className=" bg-teal-600 mb-1 text-left rounded-xl p-1 text-pink-50 ">
						Username
						<input className="  text-black border-2 ml-4 border-slate-700"
							type="text"
							value={credential}
							onChange={(e) => setCredential(e.target.value)}
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

				</div>

				<button type="submit" className="bg-[rgb(221,163,112)] rounded-xl p-1 border-2 border-amber-800 mt-2 w-36">Log in</button>


			</form>
		</>
	)
}
export default Login