import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { EHRContext } from "../../../Context/EHRContext";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";

const RegisterHospital = ({ modalIsOpen, closeModal }) => {
	const { registerHospital } = useContext(EHRContext);

	const customStyles = {
		content: {
			top: "50%",
			left: "60%",
			right: "auto",
			bottom: "auto",
			width: "45%",
			display: "flex",
			flexDirection: "column",
			// alignItems: "center",
			// borderColor: "white",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};

	const [name, setName] = useState("");
	const [personalAdd, setPersonalAdd] = useState("");
	const [emailId, setEmailId] = useState("");
	const [mobileNo, setMobileNo] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await registerHospital(name, personalAdd, emailId, mobileNo);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Register"
		>
			<div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
				<div className="text-center text-2xl font-bold">
					Register as a Hospital
				</div>
				<div className="mt-4 sm:w-full sm:max-w-2xl">
					<div className="bg-white py-4 px-4 sm:rounded-lg sm:px-10">
						<form
							className="space-y-6 w-full"
							onSubmit={handleSubmit}
						>
							<div className="w-full">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<div className="mt-1 w-full">
									<input
										id="name"
										type="text"
										placeholder="Name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email address
								</label>
								<div className="mt-1">
									<input
										type="text"
										placeholder="Email"
										value={emailId}
										onChange={(e) =>
											setEmailId(e.target.value)
										}
										id="email"
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Mobile Number
								</label>
								<div className="mt-1">
									<input
										id="password"
										type="text"
										placeholder="Mobile No"
										value={mobileNo}
										onChange={(e) =>
											setMobileNo(e.target.value)
										}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									address
								</label>
								<div className="mt-1">
									<input
										id="password"
										type="text"
										placeholder="Address"
										value={personalAdd}
										onChange={(e) =>
											setPersonalAdd(e.target.value)
										}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
								>
									Register
								</button>
							</div>
						</form>
						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">
										Or continue with
									</span>
								</div>
							</div>
							<div className="mt-6 grid grid-cols-3 gap-3">
								<div>
									<a
										href="/org/profile"
										className="w-full inline-flex justify-center py-2 px-4 border border-red-300 rounded-md shadow-sm bg-white text-sm font-medium text-red-500 hover:bg-red-50"
									>
										<PublicIcon />{" "}
										<span className="px-1 text-base">
											Org
										</span>
									</a>
								</div>
								<div>
									<a
										href="/user/profile"
										className="w-full inline-flex justify-center py-2 px-4 border border-indigo-300 rounded-md shadow-sm bg-white text-sm font-medium text-indigo-500 hover:bg-indigo-50"
									>
										<PersonIcon />{" "}
										<span className="px-1 text-base">
											User
										</span>
									</a>
								</div>
								<div>
									<a
										href="/insuranceComp/profile"
										className="w-full inline-flex justify-center py-2 px-4 border border-pink-300 rounded-md shadow-sm bg-white text-sm font-medium text-pink-500 hover:bg-pink-50"
									>
										<HealthAndSafetyIcon />{" "}
										<span className="px-1 text-base">
											Insurance
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div>Register as a Hospital</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email"
					value={emailId}
					onChange={(e) => setEmailId(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Mobile No"
					value={mobileNo}
					onChange={(e) => setMobileNo(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Address"
					value={personalAdd}
					onChange={(e) => setPersonalAdd(e.target.value)}
				/>

				<button onClick={(e) => handleSubmit(e)}>Register</button>
			</form> */}
		</Modal>
	);
};

export default RegisterHospital;
