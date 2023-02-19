import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import GroupIcon from '@mui/icons-material/Group';

import styles from "./Sidebar.module.css";
export const orgSidebar = [
	// {
	// 	name: "New Research",
	// 	url: "/createNewResearch",
	// 	icon: <LocalHospitalIcon className={styles.listIcon} />,
	// },
	{
		name: "Profile",
		url: "/insuranceComp/profile",
		icon: <Person2Icon className={styles.listIcon} />,
	},
	{
		name: "Users",
		url: "/insuranceComp/users",
		icon: <GroupIcon className={styles.listIcon} />,
	},
];
