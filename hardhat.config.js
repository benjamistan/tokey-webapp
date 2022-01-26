require('@nomiclabs/hardhat-waffle');
const fs = require('fs');

const MUMBAI_PROJECT_ID = 'RxnA6DDDU0-ukw5KwC57KafClF9si1cB';
const PRIVATE_KEY = fs.readFileSync('.secret').toString();

module.exports = {
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_PROJECT_ID}`,
			accounts: [PRIVATE_KEY],
		},
	},
	solidity: '0.8.4',
};
