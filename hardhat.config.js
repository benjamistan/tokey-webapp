require('@nomiclabs/hardhat-waffle');
const fs = require('fs');

const PRIVATE_KEY = fs.readFileSync('.secret').toString();

module.exports = {
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_POLYGON_MUMBAI}`,
			accounts: [PRIVATE_KEY],
		},
	},
	solidity: '0.8.4',
};
