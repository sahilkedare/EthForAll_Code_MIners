import { Box, Container, Typography } from "@mui/material";
import Header from "./Header";
import styles from "./HomeScreen.module.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const HospitalD = [
	"● Create new record for patient",
	"● Access past medical records",
	"● Check all Patients profile",
];
const UserD = [
	"● Find the closest hospitals",
	"● Give data access to Orgs ",
	"● Access past medical records",
];
const OrgD = ["● Create new Researches", "● Access patient data"];
const InsuranceD = ["● Access past medical record", "● Give Timely Aid"];


const HomeScreen = () => {
	const Footer = () => {
		return (
			<>
				<Box
					component="footer"
					sx={{
						py: 3,
						px: 2,
						mt: "auto",
						display: "flex",
						flexDirection: "column",
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[200]
								: theme.palette.grey[800],
					}}
				>
					<Container maxWidth="sm">
						<Typography variant="body">
							MediCare 2023 &#169; - All Rights Reserved.
						</Typography>
					</Container>
				</Box>
			</>
		);
	};

	const CustomButton = ({ text, color = "#753bd9" }) => {
		return (
			<button
				className={styles.btn}
				style={{ backgroundColor: `${color}` }}
			>
				{text}
			</button>
		);
	};

	const FeatureCard = ({ name, text, icon, url = "#" }) => {
		return (
			<div className={`${styles.feature_card}`}>
				<div className={styles.icon}>{icon}</div>
				<h3>{name}</h3>
				{text.map(function (name, index) {
					return <p key={index}>{name}</p>;
				})}
				<a href={url}>see more..</a>
			</div>
		);
	};

	return (
		<>
			<Header />

			<section className={`${styles.container} ${styles.hero}`}>
				<h1>Reorganizing Healthcare</h1>
				<p>
					<strong style={{ color: "#753bd9", fontSize: "20px" }}>
						MediCare
					</strong>{" "}
					is intended to usher in a healthcare revolution by providing a platform for people, Doctors, Hospitals,
					 Medtech, and Healthtech Organizations where all medical data can be stored, accessed, and used for the 
					 patients' benefit as and when needed while protecting the patient's privacy and preventing unauthorised use of their data.
				</p>
				<CustomButton text="get started now" />
			</section>
			
			<section className={styles.features}>
				<div className={`${styles.container}`}>
					<button
						style={{
							backgroundColor: "#753bd9",
							padding: "7px 15px",
						}}
					>
						Key Features
					</button>
					<h3>What is MediCare ?</h3>
					<p>
					Our application provides a central repository of data containing 
					all of the tests and other medical processes that a patient has gone through,
					 reducing the possibility of duplication of the same processes and thus preventing 
					 treatment delays. Hospitals can use this patient data to provide blood and other 
					 medical services to indigent patients. Patients have the ability to provide data to 
					 research organisations in order for them to research and develop solutions to medical problems.
					</p>
					<div className={`${styles.row} ${styles.features__flex}`}>
						<FeatureCard
							icon={
								<LocalHospitalIcon
									sx={{ color: "#753bd9", fontSize: "80px" }}
								/>
							}
							name="Hospital"
							text={HospitalD}
							url="/hospital/dashbord"
						/>
						<FeatureCard
							icon={
								<PersonIcon
									sx={{ color: "#753bd9", fontSize: "80px" }}
								/>
							}
							name="Patient"
							text={UserD}
							url="/user/profile"
						/>
						<FeatureCard
							icon={
								<PublicIcon
									sx={{ color: "#753bd9", fontSize: "80px" }}
								/>
							}
							name="Orgnization"
							text={OrgD}
							url="/org/profile"
						/>
						<FeatureCard
							icon={
								<HealthAndSafetyIcon
									sx={{ color: "#753bd9", fontSize: "80px" }}
								/>
							}
							name="Insurance"
							text={OrgD}
							url="/org/profile"
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default HomeScreen;
