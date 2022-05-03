import React, { useMemo, useState, useEffect } from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { AlchemyProvider } from '@ethersproject/providers';

const Admin = () => {
	const [nbOfListings, setNbOfListings] = useState();

	const apiKey = 'RxnA6DDDU0-ukw5KwC57KafClF9si1cB';

	const marketplaceModule = useMemo(() => {
		const provider = new AlchemyProvider('maticmum', apiKey);
		const sdk = new ThirdwebSDK(provider);
		return sdk.getMarketplace('0xe2e5dDda1ECA5127f4A85305be3ed102be9906CF');
	}, []);

	useEffect(() => {
		async function fetchMarketplaceData() {
			const numberOfNFTs = await marketplaceModule.getTotalCount();
			const nbNFTs = numberOfNFTs.toNumber();
			setNbOfListings(nbNFTs);
		}
		fetchMarketplaceData();
	});

	return (
		<div className='block container mx-auto pt-5 pb-20'>
			<div className='mb-5'>
				Number of Listings: <strong>{nbOfListings}</strong>
			</div>
		</div>
	);
};

export default Admin;
