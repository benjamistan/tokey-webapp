import { AlchemyProvider } from '@ethersproject/providers';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useMemo, useState } from 'react';

const NFTListComponent = () => {
	const [all, setAll] = useState([]);
	const apiKey = process.env.ALCHEMY_KEY_POLYGON_MUMBAI;

	const nftCollection = useMemo(() => {
		const provider = new AlchemyProvider('maticmum', apiKey);
		console.log('NFTListComponent: apiKey is ', apiKey);
		const sdk = new ThirdwebSDK(provider);
		return sdk.getNFTCollection('0x4b94B8077da9db887a37a8814dAc0CFAD22B5A99');
	}, []);

	async function getNFTs() {
		console.log('nftCollection is', nftCollection);
		console.log('getting all NFTs');
		const nfts = await nftCollection.totalSupply();
		const nbNfts = nfts.toNumber();
		console.log('nfts:', nbNfts);

		//setAll(await nftCollection.getAll());
		//console.log('all is all:', all);
	}

	return (
		<div>
			<button onClick={getNFTs}>NFTS to Console</button>
		</div>
	);
};

export default NFTListComponent;
