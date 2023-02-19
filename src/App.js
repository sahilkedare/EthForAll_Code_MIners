import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import FetchMyDocuments from "./screens/FetchMyDocuments";

import {
	// HospitalDashboard,
	NewRecord,
	HospitalPastRecords,
	HospitalProfileScreen,
	UserRecordByAdd,
} from "./screens/Hospital";

import {
	// ResearchOrgDashboard,
	ResearchOrgProfile,
	NewResearch,
	OrgResearch,
	OrgResearchs,
} from "./screens/ResearchOrg";
import {
	// ResearchOrgDashboard,
	InsuranceCompProfile,
	InsuranceUsers
	// OrgResearch,
	// OrgResearchs,
} from "./screens/InsuranceComp";

import {
	// Dashboard,
	Hospitals,
	PastHistory,
	ProfileScreen,
	Research,
	Researchs,
	InsuranceComps
} from "./screens/User";
import { ToastContainer } from "react-toastify";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeScreen />,
		},
		{
			path: "/insuranceComp/profile",
			element: <InsuranceCompProfile />,
		},
		{
			path: "/insuranceComp/users",
			element: <InsuranceUsers />,
		},
		{
			path: "/org/profile",
			element: <ResearchOrgProfile />,
		},
		{
			path: "/org/researchs/:researchId",
			element: <OrgResearch />,
		},
		{
			path: "createNewResearch",
			element: <NewResearch />,
		},
		{
			path: "/org/researchs",
			element: <OrgResearchs />,
		},
		{
			path: "/hospital/profile",
			element: <HospitalProfileScreen />,
		},
		{ path: "/hospital/users/", element: <UserRecordByAdd /> },
		{
			path: "/hospital/history",
			element: <HospitalPastRecords />,
		},
		{
			path: "/user/hospitals",
			element: <Hospitals />,
		},
		{
			path: "/user/insuranceComps",
			element: <InsuranceComps/>,
		},
		{
			path: "/user/researchs",
			element: <Researchs />,
		},
		{
			path: "/researchs/:researchId",
			element: <Research />,
		},
		{
			path: "/register",
			element: <RegistrationScreen />,
		},
		{
			path: "/login",
			element: <LoginScreen />,
		},
		{
			path: "/user/profile",
			element: <ProfileScreen />,
		},
		{
			path: "/user/history",
			element: <PastHistory />,
		},
		{
			path: "/fetchmydocs",
			element: <FetchMyDocuments />,
		},
		{
			path: "createNewRecord",
			element: <NewRecord />,
		},
	]);
	return (
		<>
			<ToastContainer />
			<RouterProvider router={router} />
		</>
	);
};

export default App;

// 4- user - 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
// 5- hospital - 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097
// 6- researchorg
// 7- insurance