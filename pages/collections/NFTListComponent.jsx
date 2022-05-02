import React, { useMemo, useState, useEffect } from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { AlchemyProvider } from '@ethersproject/providers';

const NFTListComponent = () => {
	const [all, setAll] = useState([]);
	const apiKey = 'RxnA6DDDU0-ukw5KwC57KafClF9si1cB';

	const nftCollection = useMemo(() => {
		const provider = new AlchemyProvider('maticmum', apiKey);
		const sdk = new ThirdwebSDK(provider);
		return sdk.getNFTCollection('0x4b94B8077da9db887a37a8814dAc0CFAD22B5A99');
	}, []);

	async function getNFTs() {
		console.log('nftCollection is', nftCollection);
		console.log('getting all NFTs');
		const nfts = await nftCollection.totalSupply();
		const nbNfts = nfts.toNumber();
		console.log('nfts:', nbNfts);

		setAll(await nftCollection.getAll());
		console.log('all is all:', all);
	}

	return (
		<div>
			<button onClick={getNFTs}>NFTS to Console</button>
		</div>
	);
};

export default NFTListComponent;
