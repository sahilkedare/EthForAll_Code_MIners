import { useState } from "react";
import "../../styles/header.css";
import { Container } from "@mui/material";

export default function Header() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const menus = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Dashboard",
			url: "/hospital/profile",
		},
		{
			name: "Register",
			url: "/user/profile",
		},
	];

	return (
		<section className="container">
			<div className="navigation" style={{}}>
				<a  style={{ color: "#753bd9", fontSize: "24px",fontWeight:"500" }} href="/" className="brand-name">
					MediCare
				</a>
				<button
					className="hamburger"
					onClick={() => {
						setIsNavExpanded(!isNavExpanded);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="white"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div
					className={
						isNavExpanded
							? "navigation-menu expanded"
							: "navigation-menu"
					}
				>
					<ul>
						{menus.map(({ name, url }, index) => (
							<li keys={index}>
								<a href={url}>{name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
