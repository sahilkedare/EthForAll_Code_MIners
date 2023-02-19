require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		version: "0.8.17",
		settings: { optimizer: { enabled: true, runs: 1 } },
	},
	paths: {
		artifacts: "./src/artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
			// allowUnlimitedContractSize: true,
		},
		polygon_mumbai: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/biIoPWGwP644LiLAeRM1H9RKlOne3-HL`,
			accounts: [
				"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
			],
			allowUnlimitedContractSize: true,
		},
	},
};
