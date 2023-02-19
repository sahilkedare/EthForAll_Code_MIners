import React, { useEffect, useState, useContext, useCallback } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./InsuranceComps.module.css";
import { EHRContext } from "../../../Context/EHRContext";
import { useNavigate } from "react-router-dom";
import RegisterUser from "../RegisterUser/RegisterUser";
import { toast } from "react-toastify";

const InsuranceComps = () => {
	const {
		currentAccount,
		fetchAllInsuranceComps,
		grantAccessToInsuranceComp,
		checkIfWalletConnected,
		removeAccessFromInsuranceComp,
		fetchUserByAddress,
	} = useContext(EHRContext);
	const [searchInput, setSearchInput] = useState("");
	const [insuranceComps, setInsuranceComps] = useState([]);

	const fetchInsuranceComps = useCallback(async (account) => {
		const hospits = await fetchAllInsuranceComps(account);
		setInsuranceComps(hospits);
	});

	useEffect(() => {
		checkIfWalletConnected();
	});

	useEffect(() => {
		fetchInsuranceComps(currentAccount).catch((err) => console.log(err));
	}, [currentAccount]);

	const [modalIsOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const { checkRole } = useContext(EHRContext);
	const [user, setUser] = useState({ name: "" });

	const fetchUser = useCallback(async (account) => {
		const data = await checkRole(account);
		if (data === 0) {
			openModal(true);
		} else if (data === 2) {
			navigate("/insuranceComp/profile");
		} else if (data === 3) {
			navigate("/org/profile");
		} else {
			console.log(account);
			const data = await fetchUserByAddress(account);
			setUser({
				userAdd: data.userAdd,
				name: data.name,
				emailId: data.emailId,
				mobileNo: data.mobileNo,
				personalAdd: data.personalAdd,
				gender: data.gender.toNumber(),
				dob: data.dob,
			});
		}
	});

	useEffect(() => {
		fetchUser(currentAccount);
	}, [currentAccount]);

	const grantAccess = async (e, address) => {
		e.preventDefault();
		try {
			await grantAccessToInsuranceComp(address);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	const removeAccess = async (e, address) => {
		e.preventDefault();
		try {
			await removeAccessFromInsuranceComp(address);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.insuranceComps_wrapper}>
			<RegisterUser closeModal={closeModal} modalIsOpen={modalIsOpen} />
			<Sidebar value="InsuranceComps" />
			<div className={styles.main_wrapper}>
				<div className={styles.navBar}>
					<h3 className={styles.user}>Welcome {user.name}!</h3>
				</div>
				<div className={styles.content}>
					<div className={styles.insuranceComps_search}>
						<input
							className={`px-5 py-2 sm:rounded-md font-medium bg-gray-100 placeholder-gray-500 text-sm border focus:outline-none focus:border-gray-400 focus:bg-white`}
							placeholder="Search by address"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>
						<button
							className={styles.searchButton}
							// onClick={(e) => filterinsuranceComps(e)}
						>
							Search
						</button>
					</div>
					<div className={styles.insuranceCompContainer}>
						<div className={styles.insuranceCompsGrid}>
							{insuranceComps &&
								insuranceComps.map((insuranceComp, id) => {
									if (
										searchInput == "" ||
										insuranceComp.compAdd.includes(searchInput)
									) {
										return (
											<div
												key={id}
												id={id}
												className={styles.hosBox}
											>
												<div className={styles.hosName}>
													<span>{insuranceComp.name}</span>
												</div>
												<div
													className={
														styles.insuranceCompDescription
													}
												>
													<b>Email Id:</b>{" "}
													{insuranceComp.emailId}
												</div>

												<div
													className={
														styles.insuranceCompDescription
													}
												>
													<b>Mobile No:</b>{" "}
													{insuranceComp.contactNo}
												</div>
												<div
													className={
														styles.compAddress
													}
												>
													<b>Address:</b>
													<br />
													{insuranceComp.personalAdd}
												</div>
												{insuranceComp.access === true ? (
													<button
														className={
															styles.grantButton
														}
														onClick={(e) =>
															removeAccess(
																e,
																insuranceComp.compAdd
															)
														}
													>
														Remove Access
													</button>
												) : (
													<button
														className={
															styles.grantButton
														}
														onClick={(e) =>
															grantAccess(
																e,
																insuranceComp.compAdd
															)
														}
													>
														Grant Access
													</button>
												)}
											</div>
										);
									}
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InsuranceComps;
