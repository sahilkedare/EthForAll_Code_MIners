import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import InsuranceCompSidebar from "../../../components/InsuranceCompSidebar/InsuranceCompSidebar";
import { EHRContext } from "../../../Context/EHRContext";
import { useNavigate } from "react-router-dom";
import RegisterInsuraceComp from "../RegisterInsuranceComp/RegisterInsuranceComp";

const InsuranceCompProfile = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState({ name: "" });

	const navigate = useNavigate();

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const {
		checkIfWalletConnected,
		fetchInsuranceCompByAddress,
		currentAccount,
		checkRole,
	} = useContext(EHRContext);

	useEffect(() => {
		checkIfWalletConnected();
	}, []);

	const fetchUser = useCallback(async (account) => {

		console.log("hello from comp profile");
		const data = await checkRole(account);
		console.log(data);
		if (data === 0) {
			openModal(true);
		} else if (data === 1) {
			navigate("/user/profile");
		} else if (data === 2) {
			navigate("/hospital/profile");
		} else if (data === 3) {
			navigate("/org/profile");
		}
		else {
			console.log("current account");
			console.log(account);
			// console.log(fetchInsuranceCompByAddress);
			const data = await fetchInsuranceCompByAddress(account);
			setUser({
				orgAdd: data.compAddr,
				name: data.name,
				emailId: data.emailId,
				mobileNo: data.contactNo,
			});
		}
	});

	useEffect(() => {
		fetchUser(currentAccount);
		console.log("ca", currentAccount);
	}, [currentAccount]);

	const userInfo = {
		name: "Pranit",
		email: "pranit@gmail.com",
		mobile: "+91 8766492060",
		gender: "Male",
		dob: "29/12/2022",
		pernonalAdd:
			"H R Mahajani Rd, Matunga East, Mumbai, Maharashtra 400019",
	};

	return (
		<div className={styles.hospitals_wrapper}>
			<RegisterInsuraceComp closeModal={closeModal} modalIsOpen={modalIsOpen} />
			<InsuranceCompSidebar value="Profile" />
			<div className={styles.main_wrapper}>
				<div className={styles.navBar}>
					<h3 className={styles.user}>Welcome {user.name}!</h3>
				</div>
				<div className={styles.inforWrapper}>
					<div className={styles.hospitals_search}>
						<button className={styles.searchButton} disabled>
							Profile Information
						</button>
					</div>
					<div className={styles.profileContainer}>
						{Object.keys(user).map((key, index) => (
							<div keys={index}>
								<div className={styles.profileRow}>
									<h4 className={styles.title}>
										{key.toLocaleUpperCase()}{" "}
									</h4>
									<p style={{marginTop: "9px"}}>:</p>
									<p className={styles.text}>{user[key]}</p>
								</div>

								<hr className={styles.horizontal} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InsuranceCompProfile;
