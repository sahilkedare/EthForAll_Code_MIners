import React from "react";
import { Link } from "react-router-dom";
import { orgSidebar } from "./orgSidebar";
import styles from "./Sidebar.module.css";

const RSidebar = ({ value }) => {
	return (
		<div className={styles.sidebar_wrapper}>
			<Link to="/">
				<div className={styles.logoDiv}>
					{/* <svg
						width="95%"
						// height="93"
						viewBox="0 0 407 93"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23.2382 0.584923C9.58756 3.53289 -0.103371 16.6853 0.000832292 32.2188C0.000832292 41.4029 2.60592 48.0925 8.85814 54.5553C16.7776 62.9457 53.6657 93.5591 55.1245 92.9922C55.8539 92.6521 66.5869 83.9216 78.8829 73.4903C105.663 51.1538 109.102 46.2784 108.998 31.6519C108.894 3.19274 76.6947 -10.5266 58.3548 10.1091L54.4993 14.4177L49.8101 9.20205C43.1411 1.94552 32.6165 -1.45597 23.2382 0.584923ZM40.6402 7.16115C45.3294 9.76896 50.227 15.4381 52.2068 20.6537C53.9783 25.1891 54.6035 25.1891 56.375 20.7671C58.459 15.5515 63.565 9.76896 68.3584 6.93438C73.8812 3.87304 84.4057 3.64627 90.0327 6.59423C106.809 15.3247 110.352 38.5683 96.9102 52.1743C91.7 57.5033 55.5413 87.7766 54.3951 87.7766C52.311 87.7766 11.359 52.1743 8.54552 47.8657C-6.6682 25.0757 17.507 -5.65115 40.6402 7.16115Z"
							fill="white"
						/>
						<path
							d="M56.6 42.0064C54.416 49.6258 52.336 55.6766 51.92 55.4525C51.504 55.2284 49.632 50.9705 47.656 46.0402C45.68 40.9979 43.808 36.9641 43.496 36.9641C43.184 36.9641 42.144 38.981 41.208 41.4461L39.648 45.9282H33.824C29.352 45.9282 28 46.2643 28 47.6089C28 48.9535 29.456 49.2897 35.072 49.2897C38.92 49.2897 42.664 48.7294 43.184 48.1692C43.912 47.3848 45.576 50.074 48.176 56.7971C50.36 62.2876 52.336 66.8817 52.44 66.9937C52.648 67.2178 54.52 61.3912 56.6 54.1079C58.68 46.8246 60.76 40.4377 61.28 39.9895C61.696 39.4292 62.84 41.5582 63.88 44.6956L65.648 50.4102H72.824C78.44 50.4102 80 50.074 80 48.7294C80 47.6089 78.44 47.0487 74.176 46.8246L68.248 46.4884L65.128 37.1882C63.464 32.1459 61.696 28 61.28 28C60.864 28 58.784 34.2749 56.6 42.0064Z"
							fill="white"
						/>
						<path
							d="M149 46V70H162.968C175.497 70 177.551 69.28 182.07 63.76C185.973 58.96 187 54.88 187 46C187 37.12 185.973 33.04 182.07 28.24C177.551 22.72 175.497 22 162.968 22H149V46ZM174.676 32.56C177.551 34.96 178.784 38.8 178.784 45.52C178.784 58 175.086 62.8 165.227 62.8H157.216V46V29.2H163.995C167.692 29.2 172.622 30.64 174.676 32.56Z"
							fill="white"
						/>
						<path
							d="M238 46V70H249.925C264.882 70 267.712 68.8 271.35 60.16C276.807 47.68 273.371 27.28 265.286 23.44C263.467 22.72 256.595 22 249.925 22H238V46ZM263.063 34.48C270.339 46.72 264.68 62.8 252.957 62.8H246.085V46V29.2H252.957C258.01 29.2 260.84 30.88 263.063 34.48Z"
							fill="white"
						/>
						<path
							d="M328.461 27.28C327.413 30.4 323.641 41.2 320.288 51.28L314 70H318.82C321.755 70 324.06 68.32 324.689 65.2C325.527 61.36 327.623 60.4 335.168 60.4C342.713 60.4 344.809 61.36 345.647 65.2C346.276 68.08 348.582 70 351.306 70C354.869 70 355.708 69.04 354.45 65.68C353.612 63.52 350.049 52.72 346.695 41.68C341.037 24.64 339.569 22 335.168 22C332.024 22 329.509 23.92 328.461 27.28ZM338.522 41.44C341.875 52.48 341.456 53.2 334.33 53.2C329.3 53.2 328.042 52.48 329.09 49.36C329.719 47.2 330.976 42.88 331.605 39.76C333.282 31.84 335.797 32.56 338.522 41.44Z"
							fill="white"
						/>
						<path
							d="M362 24.5C362 25.75 363.4 27 365 27C366.6 27 368 25.75 368 24.5C368 23 366.6 22 365 22C363.4 22 362 23 362 24.5Z"
							fill="white"
						/>
						<path
							d="M398.733 30.0571C398.733 38.1141 398.527 38.1141 392.74 35.5074C387.987 33.3747 385.713 33.8486 381.373 36.9293C376.827 40.4838 376 42.8536 376 51.6215C376 65.1289 381.787 72.949 390.053 70.5793C393.153 69.8684 398.113 69.1575 401.42 69.3944H407V45.6972C407 23.6588 406.793 22 402.867 22C399.56 22 398.733 23.6588 398.733 30.0571ZM397.907 46.8821C400.18 56.8349 397.287 64.655 391.5 64.655C387.987 64.655 385.507 62.7592 383.853 58.7307C380.547 50.1997 384.473 40.9578 391.5 40.9578C395.22 40.9578 396.873 42.6166 397.907 46.8821Z"
							fill="white"
						/>
						<path
							d="M205.974 38.08C203.663 40.72 202.403 41.2 202.403 39.28C202.403 37.6 200.512 36.4 198.201 36.4C194.42 36.4 194 38.08 194 53.2C194 68.32 194.42 70 198.201 70C201.773 70 202.403 68.32 202.403 59.68C202.403 47.92 203.873 44.8 210.386 42.64C215.217 40.72 216.898 34 212.276 34C210.806 34 208.075 35.92 205.974 38.08Z"
							fill="white"
						/>
						<path
							d="M286.093 39.9375C282.833 43.5 281 48.4875 281 53C281 62.025 288.944 72 295.87 72C301.777 72 311.351 63.925 308.907 61.075C308.092 59.8875 305.444 60.3625 303.407 62.025C297.5 66.3 291.592 65.5875 289.148 60.125C287.111 55.6125 287.518 55.375 299.537 55.375C310.129 55.375 311.759 54.9 310.74 51.575C310.129 49.4375 309.518 46.825 309.518 45.6375C309.518 41.3625 301.166 34 296.278 34C293.426 34 288.741 36.6125 286.093 39.9375ZM301.37 42.075C301.37 42.55 301.981 44.6875 302.592 46.825C303.611 49.9125 302.389 50.625 296.481 50.625C289.555 50.625 286.907 47.0625 290.574 42.7875C292 40.8875 301.37 40.4125 301.37 42.075Z"
							fill="white"
						/>
						<path
							d="M362 53C362 66.6 362.6 70 365 70C367.4 70 368 66.6 368 53C368 39.4 367.4 36 365 36C362.6 36 362 39.4 362 53Z"
							fill="white"
						/>
					</svg> */}
					<a  style={{ color: "#fff", fontSize: "24px",fontWeight:"500" }} href="/" className="brand-name">
					MediCare
				</a>
				</div>
			</Link>
			<hr className="bg-gray-200 border-0" />

			<div>
				<ul className={styles.sidebarList}>
					{orgSidebar.map((item, index) => {
						return (
							<li key={item.name}>
								<div
									className={`${
										item.name === value ? styles.active : ""
									}`}
								>
									{item.icon}
									<Link to={item.url}>{item.name}</Link>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default RSidebar;
