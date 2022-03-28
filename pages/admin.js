import React, { useMemo, useState, useEffect } from 'react';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';

const Admin = () => {
	const [listings, setListings] = useState([]);
	let nbOfListings;

	const apiKey = 'RxnA6DDDU0-ukw5KwC57KafClF9si1cB';

	const provider = new AlchemyProvider('maticmum', apiKey);
	console.log(provider);

	// Get marketplace module
	const marketplaceModule = useMemo(() => {
		if (!provider) return;
		const sdk = new ThirdwebSDK(provider);
		const res = sdk.getMarketplaceModule(
			'0x254aF607E999D48574c03f520B0637bd07ab81aC'
		);
		console.log('Marketplace is:', res);
		return res;
	}, []);

	// Get listings
	useEffect(() => {
		if (!marketplaceModule) return;
		(async () => {
			setListings(await marketplaceModule.getAllListings());
		})();
	}, [marketplaceModule]);

	if (listings.length > 0) {
		console.log(listings);
		nbOfListings = listings.length;
	}

	return (
		<div className='block container mx-auto pt-5 pb-20'>
			<div className='mb-5'>
				Market Address: <strong>{marketplaceModule.address}</strong>
			</div>
			<div>
				Number of Listings: <strong>{nbOfListings}</strong>
			</div>
			<ul></ul>
		</div>
	);
};

export default Admin;
